import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { CalculatedResult } from './CalculatedResult'
import { ToastContainer, toast } from 'react-toastify'
import './DmsConvert.scss'
import 'react-toastify/dist/ReactToastify.css'

interface Args {
  latdeg: number
  latmin: number
  latsec: number
  londeg: number
  lonmin: number
  lonsec: number
  ns: string
  ew: string
}

const loc: Args = {
  latdeg: 0,
  latmin: 0,
  latsec: 0,
  londeg: 0,
  lonmin: 0,
  lonsec: 0,
  ns: 'N',
  ew: 'E'
}

export const DmsConvert = () => {
  const [result, setResult] = useState<Args>(loc)
  const [coord, setCoord] = useState<Args>(loc)

  const handleChange = (event) => {
    const { name, value } = event.target
    setCoord((loc) => ({ ...loc, [name]: value }))
  }

  const submit = (coord: Args) => {
    //validate input
    let invalid = false
    if (
      coord.latdeg > 90 ||
      coord.latdeg < 0 ||
      coord.latmin > 59 ||
      coord.latmin < 0 ||
      coord.latsec > 59 ||
      coord.latsec < 0
    ) {
      toast.error('Invalid Latitude', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        toastId: 'latitude'
      })
      invalid = true
    }

    if (
      coord.londeg > 180 ||
      coord.londeg < 0 ||
      coord.lonmin > 59 ||
      coord.lonmin < 0 ||
      coord.lonsec > 59 ||
      coord.lonsec < 0
    ) {
      toast.error('Invalid Longitude', {
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
    setResult({ ...coord })
  }

  return (
    <div className="widget_choice DmsConvert">
      <ToastContainer />
      <label>Latitude:</label>
      <div className="vertical-stack">
        <div className="horizontal-stack">
          <label htmlFor="latdeg">D:&nbsp;</label>
          <input
            type="number"
            name="latdeg"
            id="latdeg"
            className="StyleInput"
            value={coord.latdeg}
            onChange={handleChange}
          />
        </div>

        <div className="horizontal-stack">
          <label htmlFor="latmin">M:&nbsp;</label>
          <input type="number" name="latmin" id="latmin" className="StyleInput" value={coord.latmin} onChange={handleChange} />
        </div>

          <div className="horizontal-stack">
            <label htmlFor="latsec">S:&nbsp;</label>
            <input type="number" name="latsec" id="latsec" className="StyleInput" value={coord.latsec} onChange={handleChange} />
          </div>


          <div className="horizontal-stack">
            <select title="N/S" name="ns" id="ns" onChange={handleChange}>
              <option value="N">N</option>
              <option value="S">S</option>
            </select>
          </div>

        <label>Longitude:</label>
        <div>
          <div className="horizontal-stack">
            <label htmlFor="londeg">D:&nbsp;</label>
            <input type="number" id="londeg" name="londeg" className="StyleInput" value={coord.londeg} onChange={handleChange} />
          </div>
        </div>
        <div>
          <div className="horizontal-stack">
            <label htmlFor="lonmin"> M:&nbsp;</label>
            <input type="number" name="lonmin" id="lonmin" className="StyleInput" value={coord.lonmin} onChange={handleChange} />
          </div>
        </div>
        <div>
          <div className="horizontal-stack">
            <label htmlFor="lonsec">;S:&nbsp;</label>
            <input type="number" name="lonsec" id="lonsec" className="StyleInput" value={coord.lonsec} onChange={handleChange} />
          </div>
        </div>
        <div>
          <div className="horizontal-stack">
            <select title="E/W" name="ew" id="ew" onChange={handleChange}>
              <option value="E">E</option>
              <option value="W">W</option>
            </select>
          </div>
        </div>
        <div>
          <div className="horizontal-stack">
            <Button
              onClick={() => {
                submit(coord)
              }}
            ></Button>
            <br />
            <CalculatedResult coord={result} />
          </div>
        </div>
      </div>
    </div>
  )
}

//export default DmsConvert
