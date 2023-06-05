import React, { useState } from 'react'
import DMSDisplay from './DMSDisplay'
import { Button } from 'react-bootstrap'
import 'react-bootstrap/dist/react-bootstrap.min.css'
import 'index.css'
import './CoordConvert.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CoordConvert = () => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [result, setResult] = useState({ latitude: '', longitude: '' })

  const submit = (lat: string, lon: string) => {
    let invalid = false
    if (+lat > 90 || +lat < -90) {
      toast.error('Invalid Latitude', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'latitude'
      })
      invalid = true
    }

    if (+lon > 180 || +lon < -180) {
      toast.error('Invalid Longitiude', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'longitude'
      })
      invalid = true
    }
    if (invalid) {
      return
    }

    setResult({ latitude: lat, longitude: lon })
  }

  const handleChangeLat = (event) => {
    setLat(event.target.value)
  }

  const handleChangeLon = (event) => {
    setLon(event.target.value)
  }

  return (
    <div className={'widget_choice CoordConvert'}>
      <ToastContainer />
      <h4>Convert from Decimal to Degress Minutes Seconds</h4>
      <div className="vertical-stack">
        <div className="horizontal-stack">
          <div>
            <label htmlFor="latitude-text">Latitude</label>
          </div>
          <div>
            <input
              type="text"
              name="lat"
              id="latitude-text"
              defaultValue="29.5"
              value={lat}
              onChange={handleChangeLat}
            />
          </div>

          <div>
            <label htmlFor="longitude-text">Longitude</label>
          </div>
          <div>
            <input
              type="text"
              name="lon"
              id="longitude-text"
              defaultValue="-98.5"
              value={lon}
              onChange={handleChangeLon}
            />
          </div>
        </div>
        <div className="button-row">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              submit(lat, lon)
            }}
          >
            Convert
          </Button>
        </div>

        <DMSDisplay lat={result.latitude} lon={result.longitude} />
      </div>
    </div>
  )
}
export default CoordConvert
