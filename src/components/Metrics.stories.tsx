import { Story } from '@storybook/react'

import { Metrics } from './Metrics'

export default {
  title: 'Components/Metrics',
  component: Metrics,
}

const Template: Story = (args) => <Metrics {...args} />

export const Basic = Template.bind({})
