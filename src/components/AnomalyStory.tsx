import { anomalies } from '../data/content'
import { useActiveIndex } from '../hooks/useActiveIndex'
import { TransactionTimeline } from './TransactionTimeline'

export function AnomalyStory() {
  const active = useActiveIndex('.anomaly-copy')
  const anomaly = anomalies[active]
  return <section className="anomaly-story section" id="anomalies"><div className="container"><p className="eyebrow">Read anomalies</p><h2 className="section-title">트랜잭션에서 발생 가능한 3가지 읽기 이상 현상</h2><p className="section-lead">스크롤에 따라 각 현상의 동시 실행 순서가 전개됩니다. 무엇이 변했는지를 기준으로 세 현상을 구분하세요.</p><div className="anomaly-layout"><aside className="anomaly-visual"><div className="anomaly-panel" key={anomaly.id}><div className="anomaly-panel__title"><span>{anomaly.index}</span><div><p className="overline">ANOMALY TIMELINE</p><h3>{anomaly.name}</h3></div></div><TransactionTimeline steps={anomaly.steps}/><p className="outcome outcome--risk"><b>발생 결과</b>{anomaly.outcome}</p></div></aside><div>{anomalies.map((item,index)=><article className={`anomaly-copy ${active===index?'active':''}`} data-index={index} key={item.id}><span className="number">{item.index}</span><h3>{item.name}</h3><strong>{item.question}</strong><p>{item.summary}</p><div className="mini-sequence">{item.steps.map(step=><i key={step.order}>{step.order}</i>)}</div></article>)}</div></div></div></section>
}
