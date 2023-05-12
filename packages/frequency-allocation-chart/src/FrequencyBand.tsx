import React, { useState } from 'react'
import * as d3 from 'd3'
import { Button } from 'react-bootstrap'
import './FrequencyBand.scss'
import { useD3 } from 'hooks/useDthree'
import { buildData } from './mkBands2'
import * as FA from './FreqencyAllocationTable'
import { colorForService, textColorForService } from './mkColor'
import { ConvFreq } from './cnvFreq'

type FrequencyBandProps = {
  band?: number | string
  redVerticals?: boolean
  showBandHeader?: boolean
}

export const FrequencyBand: React.FC<FrequencyBandProps> = ({
  band = 6,
  redVerticals = false,
  showBandHeader = true
}: FrequencyBandProps) => {
  let data: FA.FrequencyAllocation[] = []
  let min = 3e5
  let max = 3e6
  switch (band) {
    case 1:
    case 'ITU_ELF':
      data = FA.BandITU_ELF()
      min = 3
      max = 30
      break
    case 2:
    case 'ITU_SLF':
      data = FA.BandITU_SLF()
      min = 30
      max = 300
      break
    case 3:
    case 'ITU_ULF':
      data = FA.BandITU_ULF()
      min = 300
      max = 3e3
      break
    case 4:
    case 'ITU_VLF':
      data = FA.BandITU_VLF()
      min = 3e3
      max = 30e3
      break
    case 5:
    case 'ITU_LF':
      data = FA.BandITU_LF()
      min = 30e3
      max = 300e3
      break
    case 7:
    case 'IEEE_HF':
    case 'ITU_HF':
      data = FA.Band3M()
      min = 3e6
      max = 30e6
      break
    case 8:
    case 'IEEE_VHF':
    case 'ITU_VHF':
      data = FA.Band30M()
      min = 30e6
      max = 300e6
      break
    case 9:
    case 'ITU_UHF':
      data = FA.Band300M()
      min = 300e6
      max = 3e9
      break
    case 10:
    case 'ITU_SHF':
      data = FA.Band3G()
      min = 3e9
      max = 30e9
      break
    case 11:
    case 'ITU_EHF':
      data = FA.Band30G()
      min = 30e9
      max = 300e9
      break
    case 12:
    case 'ITU_THF':
      data = FA.BandITU_THF()
      min = 300e9
      max = 3e12
      break
    case 'IEEE_UHF':
      data = FA.BandIEEE_UHF()
      min = 300e6
      max = 1e9
      break
    case 'IEEE_L':
      data = FA.BandIEEE_L()
      min = 1e9
      max = 2e9
      break
    case 'IEEE_S':
      data = FA.BandIEEE_S()
      min = 2e9
      max = 4e9
      break
    case 'IEEE_C':
      data = FA.BandIEEE_C()
      min = 4e9
      max = 8e9
      break
    case 'IEEE_X':
      data = FA.BandIEEE_X()
      min = 8e9
      max = 12.4e9
      break
    case 'IEEE_Ku':
      data = FA.BandIEEE_Ku()
      min = 12.4e9
      max = 18e9
      break
    case 'IEEE_K':
      data = FA.BandIEEE_K()
      min = 18e9
      max = 26.5e9
      break
    case 'IEEE_Ka':
      data = FA.BandIEEE_Ka()
      min = 26.5e9
      max = 40e9
      break
    case 'IEEE_Q':
      data = FA.BandIEEE_Q()
      min = 33e9
      max = 50e9
      break
    case 'IEEE_V':
      data = FA.BandIEEE_V()
      min = 50e9
      max = 75e9
      break
    case 'IEEE_W':
      data = FA.BandIEEE_W()
      min = 75e9
      max = 110e9
      break
    case 6:
    case 'ITU_MF':
    default:
      data = FA.Band300k()
      break
  }

  const [zoom, setZoom] = React.useState(100)
  const handleKeyUp = (e) => {
    if (e.key === '+') {
      setZoom(zoom + 0.1)
    } else if (e.key === '-') {
      setZoom(Math.min(zoom - 0.1, 0.1))
    }
    console.log(`Zoom: ${zoom} `)
    console.log(JSON.stringify(e))
  }
  const handlePlus = () => {
    setZoom(zoom + 10)
  }
  const handleMinus = () => {
    setZoom(Math.max(zoom - 10, 10))
  }

  const ref = useD3(
    (svg) => {
      const sWidth = 3600

      const margin = {
        top: 20,
        right: 15,
        left: 20,
        bottom: 20
      }

      const chartHeight = 280 - margin.top - margin.bottom
      const chartWidth = 5000 - margin.left - margin.right

      const dif = max - min

      const Scale = d3.scaleLog().domain([min, max]).range([margin.left, sWidth])

      const graph = d3
        .select('.plotArea' + band)
        .append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight - 5)

      //const topLine =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.top)
        .attr('x2', sWidth)
        .attr('y1', 55)
        .attr('y2', 55)

      //const botLine =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.top)
        .attr('x2', sWidth)
        .attr('y1', 235)
        .attr('y2', 235)

      const dx = buildData(data, min, max)

      const fkLines = graph.selectAll('g').data(dx).enter().append('g')

      //const minBox =
      d3.select('.Scale' + band)
        .append('line')
        .style('stroke', 'black')
        .attr('x1', margin.left)
        .attr('x2', margin.left)
        .attr('y1', 50)
        .attr('y2', 235)

      //const minNum =
      d3.select('.Scale' + band)
        .append('text')
        .text(ConvFreq(min))
        .attr('x', Scale(min))
        .attr('y', 250)

      //const maxBox =
      d3.select('.Scale' + band)
        .style('stroke', 'black')
        .append('line')
        .attr('x1', sWidth)
        .attr('x2', sWidth)
        .attr('y1', 50)
        .attr('y2', 235)

      //const maxNum =
      d3.select('.Scale' + band)
        .append('text')
        .text(ConvFreq(max))
        .attr('x', sWidth)
        .attr('y', 250)

      fkLines
        .append('line')
        .style('stroke', 'green')
        .attr('x1', (d) => Scale(d.hi))
        .attr('x2', (d) => Scale(d.hi))
        .attr('y1', 55)
        .attr('y2', 250)

      if (redVerticals) {
        fkLines
          .append('line')
          .style('stroke', 'red')
          .attr('x1', (d) => Scale(d.lo))
          .attr('x2', (d) => Scale(d.lo))
          .attr('y1', 55)
          .attr('y2', 250)
      }

      let prev = 0
      fkLines
        .append('text')
        //.style("stroke","red")
        .style('font', '9px sans')
        .style('text-anchor', 'start')
        .text((d) => {
          if (d.lo === min) {
            return ' '
          }
          if (d.lo > prev + dif / 80) {
            prev = d.lo
            return ConvFreq(d.lo, false)
          }
          return ''
        })
        .attr('transform', (d, i) => {
          return 'translate( ' + Scale(d.lo) + ' , ' + 50 + '),' + 'rotate(-90,0,0)'
        })

      prev = 0

      fkLines
        .append('text')
        .style('font', '9px sans')
        .text((d) => {
          if (d.hi === max) {
            return ' '
          }
          if (d.hi > prev + dif / 80) {
            prev = d.hi
            return ConvFreq(d.hi, false)
          }
          return ''
        })
        .attr('transform', (d, i) => {
          return 'translate( ' + Scale(d.hi) + ' , ' + 50 + '),' + 'rotate(-90,0,0)'
        })

      let toolTip = d3
        .select(`#BandContainer${band}`)
        .append('div')
        .style('top', 200)
        .style('left', 50)
        .style('position', 'absolute')
        .style('z-index', '100')
        .style('opacity', 0)
        .style('background', '#dddddd')
        .style('border', 'solid')
        .style('text-align', 'left')
        .text('a simple tooltip')
        .style('padding', '4px')

      const freqBox = graph.selectAll('g').data(dx).append('g')
      freqBox
        .append('rect')
        .style('fill', (d) => colorForService(d.dt.Radio_Service))
        .attr('x', (d) => Scale(d.lo))
        .attr('width', (d) => Scale(d.hi) - Scale(d.lo))
        .attr('y', (d) => 55 + d.tp)
        .attr('height', (d) => d.dp)
        // The tooltip position must offset from the mouse position or mouseout will fire immediately
        .on('mouseover', (e, d) => {
          const xbox = e.pageX + 4
          const ybox = e.pageY + 4
          toolTip
            .style('background-color', colorForService(d.dt.Radio_Service))
            .style('color', textColorForService(d.dt.Radio_Service))
            .html(
              `<div class="tip"><p>${d.dt.Radio_Service}</p><p>Class Code: ${d.dt.Stn_Class_Code}</p><p>Class: ${
                d.dt.Station_Class
              }</p><p>${ConvFreq(d.dt.LowFreq, false)} to ${ConvFreq(d.dt.HighFreq)}</p><p>${
                d.dt.Primary_Secondary
              }</p></div>`
            )
            .style('top', ybox + 'px')
            .style('left', xbox + 'px')
            .style('opacity', 1)
        })
        .on('mousemove', (e) => {
          const xbox = e.pageX + 4
          const ybox = e.pageY + 4
          toolTip
            .transition()
            .duration(100)
            .style('top', ybox + 'px')
            .style('left', xbox + 'px')
        })
        .on('mouseout', (e) => {
          return toolTip.transition().duration(1200).style('opacity', 0)
        })
    },
    [data.length]
  )

  const [showControls, setShowControls] = useState(false)
  const handleMouseIn = () => {
    setShowControls(true)
  }
  const handleMouseLeave = () => {
    setShowControls(false)
  }

  return (
    <div className="BandContainer" id={`BandContainer${band}`}>
      {showBandHeader ? (
        <h4 className="band-header" onMouseEnter={handleMouseIn}>
          {ConvFreq(min)} - {ConvFreq(max)}
          {showControls ? (
            <div className="freq-zoom-controls" onMouseLeave={handleMouseLeave}>
              <Button size="sm" onClick={handleMinus}>
                <b>- </b>
              </Button>{' '}
              Zoom: {zoom}%{' '}
              <Button size="sm" onClick={handlePlus}>
                <b>+ </b>
              </Button>{' '}
            </div>
          ) : (
            <div />
          )}
        </h4>
      ) : null}
      <div className="FrequencyBand" id={`FrequencyBand${band}`} onKeyUp={handleKeyUp}>
        <svg
          ref={ref}
          style={{
            height: 258,
            width: '270%',
            marginRight: '5px',
            marginLeft: '5px',
            zoom: zoom + '%'
          }}
        >
          <g className={'plotArea' + band} />
          <g className={'Scale' + band} />
        </svg>
      </div>
    </div>
  )
}
export default FrequencyBand
