import styled from 'styled-components'

import { CounterUp } from './CounterUp'

const MetricsLayout = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
`
const MetricsRow = styled.div`
  margin-bottom: 20px;
`

export const Metrics = () => {
  return (
    <MetricsLayout>
      <MetricsRow>
        <strong>
          <CounterUp counter={700} />만 명
        </strong>
        의 사용자
      </MetricsRow>
      <MetricsRow>
        <strong>
          <CounterUp counter={100} />만 개
        </strong>
        의 여행 리뷰
      </MetricsRow>
      <MetricsRow>
        <strong>
          <CounterUp counter={470} />만 개
        </strong>
        의 여행 일정
      </MetricsRow>
    </MetricsLayout>
  )
}
