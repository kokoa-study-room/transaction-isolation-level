import { useEffect, useState } from 'react'

export function useActiveIndex(selector: string, initial = 0) {
  const [active, setActive] = useState(initial)
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(Number((entry.target as HTMLElement).dataset.index))),
      { rootMargin: '-38% 0px -44%', threshold: 0 },
    )
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [selector])
  return active
}
