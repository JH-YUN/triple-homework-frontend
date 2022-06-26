import { Story } from '@storybook/react'

import { CounterUp, CounterUpProps } from './CounterUp'

export default {
  title: 'Components/CounterUp',
  component: CounterUp,
}

const Template: Story<CounterUpProps> = (args) => <CounterUp {...args} />

export const User = Template.bind({})
User.args = {
  counter: 350,
  boldDesc: '만 명',
  desc: '의 사용자',
} as CounterUpProps
User.storyName = 'User'

export const Review = Template.bind({})
Review.args = {
  counter: 21,
  boldDesc: '만 개',
  desc: '의 리뷰',
} as CounterUpProps
Review.storyName = 'Review'

export const Save = Template.bind({})
Save.args = {
  counter: 650,
  boldDesc: '만 개',
  desc: '의 저장',
} as CounterUpProps
Save.storyName = 'Save'
