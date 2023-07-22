import { useEffect, useState } from 'react'

export const useMediaQuery = query => {
  const mediaQuery = window.matchMedia(query)
  const [match, setMatch] = useState(Boolean(mediaQuery.matches))

  useEffect(() => {
    const handler = () => setMatch(Boolean(mediaQuery.matches))

    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia === 'undefined'
  ) {
    return false
  }

  return match
}
