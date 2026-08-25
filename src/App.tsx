import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Overview } from './components/Overview'
import { IsolationStory } from './components/IsolationStory'
import { AnomalyStory } from './components/AnomalyStory'
import { Comparison } from './components/Comparison'
import { Footer } from './components/Footer'

export default function App() {
  return <><a className="skip" href="#main">본문 바로가기</a><Navigation/><main id="main"><Hero/><Overview/><IsolationStory/><AnomalyStory/><Comparison/><Footer/></main></>
}
