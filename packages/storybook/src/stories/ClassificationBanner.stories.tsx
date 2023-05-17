import { Meta, StoryObj } from '@storybook/react'
import { ClassificationBanner } from '@djbauch/classification-banner'

const meta: Meta<typeof ClassificationBanner> = {
  title: 'Kat/Classification Banner',
  component: ClassificationBanner,
  argTypes: {
    classification: {
      options: ['C', 'CUI', 'S', 'TS', 'SCI', 'U'],
      control: { type: 'inline-radio' }
    },
    placement: {
      options: ['top', 'bottom', 'inner_top', 'inner_bottom'],
      control: { type: 'radio' }
    },
    label: {
      control: { type: 'text' }
    },
    tag: {
      control: { type:'boolean' }
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
