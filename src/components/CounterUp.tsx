export interface CounterUpProps {
  counter: number
}

export const CounterUp = ({ counter }: CounterUpProps) => {
  return <>{counter}</>
}
