import styled from 'styled-components'

import { useFadeIn } from '../hooks/useFadeIn'

export interface LogoProps {
  imgSrc: string
  text?: string
}
const LogoLayout = styled.div`
  position: relative;
  width: 400px;
  height: 338px;
`
const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`
const LogoText = styled.div`
  text-align: center;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
  position: absolute;
  width: 100%;
  top: 280px;
`
export const Logo = ({ text, imgSrc }: LogoProps) => {
  const fadeIn = useFadeIn({ duration: 700, delay: 0, transY: '20px' })
  return (
    <LogoLayout {...fadeIn}>
      <LogoImg src={imgSrc} alt="로고 이미지" />
      <LogoText>{text}</LogoText>
    </LogoLayout>
  )
}
export default Logo
