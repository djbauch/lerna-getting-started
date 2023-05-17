import * as React from 'react'
import './App.css'
import { ClassificationBanner } from '@djbauch/classification-banner'
import { FrequencyBand } from '@djbauch/frequency-allocation-chart'
import '@djbauch/frequency-allocation-chart/dist/FrequencyBand.css'
import '@djbauch/classification-banner/dist/ClassificationBanner.css'

function App() {
  return (
    <div className="App">
      <ClassificationBanner placement="top" />
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>{' '}
      <FrequencyBand band={'Chart1'} />
      <FrequencyBand band={'Chart2'} />
      <FrequencyBand band={'Chart3'} />
      <ClassificationBanner placement="bottom" />
    </div>
  )
}

export default App
