import { assetUrl } from './assetUrl'

type LevelRouteMapProps = {
  src: string
  alt: string
  width: number
  height: number
  stops: readonly string[]
}

export default function LevelRouteMap({ src, alt, width, height, stops }: LevelRouteMapProps) {
  const mapUrl = assetUrl(src)
  const expandLabel = '전체 이동 동선도 크게 보기, 새 탭에서 열기'

  return (
    <div className="level-route">
      <h3>전체 이동 동선도</h3>
      <figure>
        <a className="level-route-preview" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label={expandLabel}>
          <img src={mapUrl} alt={alt} width={width} height={height} loading="lazy" />
        </a>
        <figcaption>
          <ol>{stops.map(stop => <li key={stop}>{stop}</li>)}</ol>
          <a className="level-route-expand" href={mapUrl} target="_blank" rel="noopener noreferrer" aria-label={expandLabel}>동선도 크게 보기 ↗</a>
        </figcaption>
      </figure>
    </div>
  )
}
