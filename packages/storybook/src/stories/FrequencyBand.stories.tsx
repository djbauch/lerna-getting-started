import { Meta, StoryObj } from '@storybook/react'
import { FrequencyBand } from '@djbauch/frequency-allocation-chart'

const meta: Meta<typeof FrequencyBand> = {
  title: 'Joe/Frequency Band',
  component: FrequencyBand,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    band: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'inline-radio' }
    },
    redVerticals: {
      control: { type: 'boolean' }
    },
    showBandHeader: {
      control: { type: 'boolean' }
    }
  }
}
export default meta
type Story = StoryObj<typeof FrequencyBand>

export const FrequencyChart300k: Story = {

}
