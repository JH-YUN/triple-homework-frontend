import styled from 'styled-components'

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
  return (
    <MetricsLayout {...fadeIn}>
      <MetricsRow>
        <strong>700만 명</strong>의 사용자
      </MetricsRow>
      <MetricsRow>
        <strong>100만 개</strong>의 여행 리뷰
      </MetricsRow>
      <MetricsRow>
        <strong>470만 개</strong>의 여행 일정
      </MetricsRow>
    </MetricsLayout>
  )
}
