import { createHash } from 'node:crypto'
import { cpSync, existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const buildDir = join(root, 'dist')
const publishDir = join(root, 'pages-publish')
const manifestPath = join(root, 'pages-publish-manifest.json')
const managedBy = 'why-here-pages-publish'
const excluded = new Set([
  'videos/boss-hero.mp4', 'videos/boss-hero.webp',
  'videos/hero-skybridge.mp4', 'videos/hero-skybridge.webp',
  'why-here-hero-legacy-assets.zip', 'favicon.svg', 'icons.svg',
])

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    if (entry.isSymbolicLink()) throw new Error(`Unexpected symbolic link: ${path}`)
    return entry.isDirectory() ? files(path) : [path]
  })
}

if (!existsSync(join(buildDir, 'index.html'))) throw new Error('Run npm.cmd run build first.')
const buildFiles = files(buildDir)
const sourceFiles = files(join(root, 'public')).filter(path => !excluded.has(relative(join(root, 'public'), path).split(sep).join('/')))
for (const path of sourceFiles) {
  if (statSync(path).size > 100 * 1024 * 1024) throw new Error(`GitHub file limit exceeded: ${path}`)
}
const publishedBytes = buildFiles.filter(path => !excluded.has(relative(buildDir, path).split(sep).join('/'))).reduce((sum, path) => sum + statSync(path).size, 0)
if (publishedBytes >= 1_000_000_000) throw new Error('GitHub Pages site exceeds 1 GB')
const text = buildFiles.filter(path => /\.(html|css|js)$/.test(path)).map(path => readFileSync(path, 'utf8')).join('\n')
for (const path of excluded) {
  if (text.includes(path) || text.includes(path.split('/').at(-1))) {
    throw new Error(`Previously unused asset is now referenced; review before excluding: ${path}`)
  }
}

// Only replace this script's verified, workspace-local deployment copy.
if (existsSync(publishDir)) {
  const marker = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, 'utf8')) : null
  if (relative(root, publishDir) !== 'pages-publish' || lstatSync(publishDir).isSymbolicLink() || marker?.managedBy !== managedBy || marker?.publishDir !== publishDir) {
    throw new Error('Refusing to replace an unrecognized deployment directory.')
  }
  rmSync(publishDir, { recursive: true })
}
mkdirSync(publishDir)

const included = []
const omitted = []
for (const source of buildFiles) {
  const path = relative(buildDir, source).split(sep).join('/')
  const bytes = statSync(source).size
  if (excluded.has(path)) { omitted.push({ path, bytes }); continue }
  const destination = join(publishDir, path)
  mkdirSync(dirname(destination), { recursive: true })
  cpSync(source, destination)
  const hash = file => createHash('sha256').update(readFileSync(file)).digest('hex')
  const sha256 = hash(source)
  if (sha256 !== hash(destination)) throw new Error(`Copy mismatch: ${path}`)
  included.push({ path, bytes, sha256 })
}
const manifest = {
  managedBy, publishDir, generatedAt: new Date().toISOString(),
  totalBytes: included.reduce((sum, item) => sum + item.bytes, 0),
  excludedBytes: omitted.reduce((sum, item) => sum + item.bytes, 0),
  files: included, excluded: omitted,
}
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
console.log(JSON.stringify({ publishDir, files: included.length, bytes: manifest.totalBytes, excludedBytes: manifest.excludedBytes, videoFiles: included.filter(item => item.path.endsWith('.mp4')).length }, null, 2))

writeFileSync(join(publishDir, ".nojekyll"), "")
