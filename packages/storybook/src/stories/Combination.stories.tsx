import { Meta, StoryObj } from '@storybook/react'
import { FrequencyBand } from '@djbauch/frequency-allocation-chart'
import { ClassificationBanner } from '@djbauch/classification-banner'

const Combination = () => {
  return (
    <div>
      <ClassificationBanner placement="top"/>
      <FrequencyBand band={6}/>
      <FrequencyBand band={7}/>
      <FrequencyBand band={8}/>
      <FrequencyBand band={9}/>
      <ClassificationBanner placement="bottom" />
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
