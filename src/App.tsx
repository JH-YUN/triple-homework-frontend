import styled from 'styled-components'

import { Logo } from './components/Logo'
import { Metrics } from './components/Metrics'
import { Award } from './components/Award'

const Layout = styled.section`
  position: relative;
  height: 338px;
  margin-top: 200px;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  gap: 223px;
`
const Awards = styled.div`
  display: flex;
  gap: 39px;
  margin-top: 50px;
`
const RightLayout = styled.div`
  /* align-items: flex-start; */
`

function App() {
  return (
    <Layout className="layout">
      <Logo text="2021년 12월 기준" imgSrc="/assets/triple2x.png" />
      <RightLayout>
        <Metrics />
        <Awards>
          <Award
            market="google"
            firstLine="2018 구글 플레이스토어"
            secondLine="올해의 앱 최우수상 수상"
          />
          <Award
            market="apple"
            firstLine="2018 애플 앱스토어"
            secondLine="오늘의 여행앱 선정"
          />
        </Awards>
      </RightLayout>
    </Layout>
  )
}

export default App
