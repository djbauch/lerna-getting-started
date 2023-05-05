import { Meta, StoryObj } from '@storybook/react'
import { FrequencyBand } from '@djbauch/frequency-allocation-chart'
import { ClassificationBanner } from '@djbauch/classification-banner'

const Combination = () => {
  return (
    <div>
      <ClassificationBanner position="top"/>
      <FrequencyBand band={1}/>
      <FrequencyBand band={2}/>
      <FrequencyBand band={3}/>
      <ClassificationBanner position="bottom" />
    </div>
  )
}
const meta: Meta<typeof Combination> = {
  title: 'Combo/Frequency Bands',
  component: Combination,
  parameters: {
    layout: 'fullscreen'
  }
}
export default meta
type Story = StoryObj<typeof Combination>

export const Charts: Story = {

}
