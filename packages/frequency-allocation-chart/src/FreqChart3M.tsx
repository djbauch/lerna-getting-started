import * as React from 'react'
import FrequencyBand from './FrequencyBand'
import * as FA from './FreqencyAllocationTable'
export const FreqChart3M = () =>
  <FrequencyBand data={FA.Band3M} min={3E6} max={3E7} band={2}/>
export default FreqChart3M