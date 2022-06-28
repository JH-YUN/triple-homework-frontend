import styled from 'styled-components'

import { useCounterUp } from '../hooks/useCounterUp'
import { useFadeIn } from '../hooks/useFadeIn'

const MetricsLayout = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  color: rgb(58, 58, 58);
`
const MetricsRow = styled.div`
  margin-bottom: 20px;
`

export const Metrics = () => {
  const fadeIn = useFadeIn({ duration: 700, delay: 100, transY: '20px' })
  const userCounterUp = useCounterUp({ duration: 2000, end: 700 })
  const reviewCounterUp = useCounterUp({ duration: 2000, end: 100 })
  const scheduleCounterUp = useCounterUp({ duration: 2000, end: 470 })

  return (
    <MetricsLayout {...fadeIn}>
      <MetricsRow>
        <strong>{userCounterUp}만 명</strong>의 사용자
      </MetricsRow>
      <MetricsRow>
        <strong>{reviewCounterUp}만 개</strong>의 여행 리뷰
      </MetricsRow>
      <MetricsRow>
        <strong>{scheduleCounterUp}만 개</strong>의 여행 일정
      </MetricsRow>
    </MetricsLayout>
  )
}
