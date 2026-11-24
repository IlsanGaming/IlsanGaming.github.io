export const HERO_INTRO_STORAGE_KEY = 'hero-intro-seen'

/**
 * Play the home intro only on a plain home entry, once per session.
 * It still plays under prefers-reduced-motion (no flashing or parallax, skippable at any time).
 */
export function shouldPlayHeroIntro(fragment: string) {
  if (fragment && fragment !== 'home') return false
  try {
    return sessionStorage.getItem(HERO_INTRO_STORAGE_KEY) !== '1'
  } catch {
    return true
  }
}
