import { isolationLevels } from '../data/content'

export function Comparison() {
  return <section className="section" id="compare"><div className="container"><p className="eyebrow">At a glance</p><h2 className="section-title">격리 수준별 읽기 이상 현상 비교</h2><p className="section-lead">SQL 표준의 최소 보장을 기준으로 정리했습니다. 제품별 구현은 더 강할 수 있습니다.</p><div className="table-wrap"><table><thead><tr><th>격리 수준</th><th>Dirty Read</th><th>Non-repeatable</th><th>Phantom</th></tr></thead><tbody>{isolationLevels.map(level=><tr key={level.id}><td>{level.name}</td>{level.anomalies.map(a=><td className={a.safe?'prevented':'possible'} key={a.label}>{a.safe?'방지':'가능'}</td>)}</tr>)}</tbody></table></div><div className="callout"><strong>표준 외에 확인할 것</strong><p>Lost Update와 Write Skew는 이 표만으로 판단할 수 없습니다. 재고·잔액·좌석처럼 강한 불변식이 필요하면 조건부 UPDATE, 명시적 잠금, 유니크 제약과 안전한 재시도를 함께 설계하세요.</p></div></div></section>
}
