import { Story } from '@storybook/react'

import { Award, AwardProps } from './Award'

export default {
  title: 'Components/Award',
  component: Award,
}

const Template: Story<AwardProps> = (args) => <Award {...args} />

export const Google = Template.bind({})
Google.args = {
  market: 'google',
  firstLine: '2018 구글 플레이스토어',
  secondLine: '올해의 앱 최우수상 수상',
} as AwardProps

export const Apple = Template.bind({})
Apple.args = {
  market: 'apple',
  firstLine: '2018 애플 앱스토어',
  secondLine: '오늘의 여행앱 선정',
} as AwardProps
