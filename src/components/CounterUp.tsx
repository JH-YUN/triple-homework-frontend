import styled from 'styled-components'

export interface CounterUpProps {
  counter: number
  boldDesc?: string
  desc?: string
}

const CounterLayout = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`
export const CounterUp = ({ counter, boldDesc, desc }: CounterUpProps) => {
  return (
    <CounterLayout>
      <strong>
        {counter}
        {boldDesc}
      </strong>
      {desc}
    </CounterLayout>
  )
}
