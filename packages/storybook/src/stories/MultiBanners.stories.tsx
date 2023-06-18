import { Meta, StoryObj } from '@storybook/react'
import { ClassificationBanner } from '@djbauch/classification-banner'

const MultiBanner = () => {
  return (
    <div>
      <ClassificationBanner placement="top" classification="U"/>
      <h2 style={{textAlign: 'center'}}>For display purposes only</h2>
      <ClassificationBanner classification="CUI" />
      <p><ClassificationBanner classification="CUI" tag={true} />Paragraph with tag variant of banner</p>
      <ClassificationBanner classification="S" />
      <ClassificationBanner classification="S" label="//REL TO USA, FVEY" tag={true}/>
      <ClassificationBanner classification="TS" />
      <ClassificationBanner classification="SCI" />
      <ClassificationBanner placement="bottom" classification="C"/>
    </div>
  )
}

const meta: Meta<typeof MultiBanner> = {
  title: 'Kat/Multi Banners',
  component: MultiBanner,
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
type Story = StoryObj<typeof MultiBanner>

export const Banners: Story = {
  args: {}
}
