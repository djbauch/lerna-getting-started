import * as React from 'react'
import './App.css'
import {ClassificationBanner} from '@djbauch/classification-banner'
import {FrequencyBand} from '@djbauch/frequency-allocation-chart'
import '@djbauch/frequency-allocation-chart/dist/FrequencyBand.css'

function App() {
  return (
    <div className="App">
      <ClassificationBanner position="top"/>
      <header className="App-header">
        <FrequencyBand band={1}/>
        <FrequencyBand band={2}/>
        <FrequencyBand band={3}/>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <ClassificationBanner position="bottom" />
    </div>
  )
}

export default App
