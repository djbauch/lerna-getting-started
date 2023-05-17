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
      options: ['Chart1', 'Chart2', 6, 7, 8, 9, 10, 11, 'IEEE_UHF', 'IEEE_L', 'IEEE_S', 'IEEE_C', 'IEEE_X', 'IEEE_Ku', 'IEEE_K', 'IEEE_Ka', 'IEEE_Q'],
      control: { type: 'inline-radio' }
    },
    redVerticals: {
      control: { type: 'boolean' }
    },
    showBandHeader: {
      control: { type: 'boolean' }
    },
    showZoomOnStart: {
      control: { type: 'boolean' }
    }
  }
}
export default meta
type Story = StoryObj<typeof FrequencyBand>

export const FrequencyChart300k: Story = {}
