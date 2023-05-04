import { Meta, StoryObj } from '@storybook/react'
import { ClassificationBanner } from '@djbauch/classification-banner'
const meta: Meta<typeof ClassificationBanner> = {
  title: 'ClassificationBanner',
  component: ClassificationBanner,
  parameters: {
    layout: 'fullscreen'
  }
}
export default meta
type Story = StoryObj<typeof ClassificationBanner>

export const Banner: Story = {
  args: {}
}
