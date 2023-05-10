import * as React from 'react'
import './App.css'
import { ClassificationBanner } from '@djbauch/classification-banner'
import { FrequencyBand } from '@djbauch/frequency-allocation-chart'
import '@djbauch/frequency-allocation-chart/dist/FrequencyBand.css'

function App() {
  return (
    <div className="App">
      <ClassificationBanner placement="top" />
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>{' '}
      <FrequencyBand band={6} />
      <FrequencyBand band={7} />
      <FrequencyBand band={'IEEE_UHF'} />
      <ClassificationBanner placement="bottom" />
    </div>
  )
}

export default App
