import * as React from 'react'
export const CalculatedResult = (coord) => {
  let lat = (parseInt(coord.latdeg) + parseInt(coord.latmin) / 60 + parseInt(coord.latsec) / 3600)
  if (coord.ns === 'S') {
    lat = lat * -1
  }
  let lon = (parseInt(coord.londeg) + parseInt(coord.lonmin) / 60 + parseInt(coord.lonsec) / 3600)
  if (coord.ew === 'W') {
    lon = lon * -1
  }

  return (
    <ul>
      <li>Latitude:{' ' + lat.toFixed(4)}</li>
      <li>Longitude:{' ' + lon.toFixed(4)}</li>
    </ul>
  )
}
export default CalculatedResult
