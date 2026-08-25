export type TxStep = { order: number; a?: string; b?: string; tone?: 'risk' | 'safe' | 'wait' }

export type IsolationLevel = {
  id: string
  index: string
  name: string
  label: string
  summary: string
  detail: string
  visibility: string
  initial: string
  scenario: string
  outcome: string
  anomalies: { label: string; safe: boolean }[]
  steps: TxStep[]
}

export type Anomaly = {
  id: string
  index: string
  name: string
  question: string
  summary: string
  outcome: string
  steps: TxStep[]
}
