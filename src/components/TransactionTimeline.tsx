import type { TxStep } from '../types'

export function TransactionTimeline({ steps, activeStep = steps.length - 1 }: { steps: TxStep[]; activeStep?: number }) {
  return <div className="timeline"><div className="timeline__head"><span>순서</span><span>TRANSACTION A</span><span>TRANSACTION B</span></div>{steps.map((step,index)=><div className={`timeline__row ${index<=activeStep?'is-visible':''}`} key={step.order}><b>{step.order}</b><div className={`tx-cell ${step.a?'':'empty'} ${step.tone??''}`}>{step.a}</div><div className={`tx-cell ${step.b?'':'empty'} ${step.tone??''}`}>{step.b}</div></div>)}</div>
}
