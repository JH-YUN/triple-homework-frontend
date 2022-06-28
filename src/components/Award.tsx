import styled from 'styled-components'

import { useFadeIn } from '../hooks/useFadeIn'

type Market = 'google' | 'apple'

export interface AwardProps {
  market: Market
  firstLine: string
  secondLine?: string
}

const AwardLayout = styled.div`
  display: flex;
`
const AwardImg = styled.img`
  width: 54px;
  height: 54px;
`
const AwardText = styled.div`
  line-height: 22px;
  font-size: 14px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  padding-top: 5px;
  padding-left: 8px;
`

export const Award = ({ market, firstLine, secondLine }: AwardProps) => {
  const fadeIn = useFadeIn({ duration: 700, delay: 200, transY: '20px' })
  const imgSrc =
    market === 'google'
      ? '/assets/play-store2x.png'
      : '/assets/badge-apple4x.png'
  return (
    <AwardLayout {...fadeIn}>
      <AwardImg src={imgSrc} alt="마켓 이미지" />
      <AwardText>
        {firstLine}
        <br />
        {secondLine}
      </AwardText>
    </AwardLayout>
  )
}
