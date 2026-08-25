import { useEffect, useState } from 'react'

const links = [['concept','개념'],['levels','격리 수준'],['anomalies','이상 현상'],['compare','비교']] as const

export function Navigation() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      setProgress(max ? scrollY / max * 100 : 0)
      const current = links.filter(([id]) => document.getElementById(id)!.getBoundingClientRect().top < 180).at(-1)
      setActive(current?.[0] ?? '')
    }
    addEventListener('scroll', update, { passive:true }); update()
    return () => removeEventListener('scroll', update)
  }, [])
  return <nav className="nav" aria-label="주요 탐색"><div className="nav__inner"><a className="brand" href="#top"><span>TX</span>Isolation</a><div className="nav__links">{links.map(([id,label]) => <a className={active===id?'active':''} href={`#${id}`} key={id}>{label}</a>)}</div></div><i className="nav__progress" style={{width:`${progress}%`}} /></nav>
}
