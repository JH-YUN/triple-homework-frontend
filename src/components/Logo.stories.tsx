import { Story } from '@storybook/react'

import { Logo, LogoProps } from './Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
}

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Basic = Template.bind({})
Basic.args = { text: '2021년 12월 기준' }
