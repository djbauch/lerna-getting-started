import { Meta, StoryObj } from '@storybook/react'
import { ClassificationBanner } from '@djbauch/classification-banner'

const meta: Meta<typeof ClassificationBanner> = {
  title: 'Classification Banner',
  component: ClassificationBanner,
  argTypes: {
    classChoice: {
      options: ['C', 'CUI', 'S', 'U'],
      control: { type: 'radio' }
    },
    placement: {
      options: ['top', 'bottom', 'inner_top', 'inner_bottom'],
      control: { type: 'radio' }
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
}
export default meta
type Story = StoryObj<typeof ClassificationBanner>

export const Banner: Story = {
  args: {}
}
