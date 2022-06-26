import { Story } from '@storybook/react'

import { CounterUp, CounterUpProps } from './CounterUp'

export default {
  title: 'Components/CounterUp',
  component: CounterUp,
}

const Template: Story<CounterUpProps> = (args) => <CounterUp {...args} />

export const Basic = Template.bind({})
Basic.args = {
  counter: 350,
  boldDesc: '만 명',
  desc: '의 사용자',
} as CounterUpProps
