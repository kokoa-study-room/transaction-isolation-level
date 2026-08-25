import { isolationLevels } from '../data/content'
import { useActiveIndex } from '../hooks/useActiveIndex'
import { TransactionTimeline } from './TransactionTimeline'

export function IsolationStory() {
  const active = useActiveIndex('.level-copy')
  const level = isolationLevels[active]
  return <section className="story section" id="levels"><div className="container"><p className="eyebrow">Isolation levels & scenarios</p><h2 className="section-title">트랜잭션 격리 수준의 4가지 종류와 실행 시나리오</h2><p className="section-lead">설명과 예제를 분리하지 않았습니다. 왼쪽에서 격리 수준을 읽으면 오른쪽에서 같은 수준의 두 트랜잭션이 시간순으로 실행됩니다.</p><div className="story__layout"><div className="story__copy">{isolationLevels.map((item,index)=><article className={`level-copy ${active===index?'active':''}`} data-index={index} key={item.id}><span className="number">{item.index}</span><p className="overline">{item.label}</p><h3>{item.name}</h3><p className="summary">{item.summary}</p><p>{item.detail}</p><div className="chips">{item.anomalies.map(a=><span className={a.safe?'safe':'risk'} key={a.label}>{a.safe?'✓':'!'} {a.label}</span>)}</div></article>)}</div><aside className="story__visual" aria-live="polite"><div className="scenario-panel" key={level.id}><header><div><p className="overline">{level.scenario}</p><h3>{level.name}</h3></div><code>{level.initial}</code></header><TransactionTimeline steps={level.steps}/><div className="visibility"><span>VISIBILITY RULE</span><strong>{level.visibility}</strong></div><p className="outcome"><b>결과</b>{level.outcome}</p></div></aside></div></div></section>
}
