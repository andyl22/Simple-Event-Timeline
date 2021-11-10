import React from "react";
import '../styles/Event.css'

function Event(props) {
  return (
    <div className='event'>
      <p className='date'>Mon 24 May 2021 10:01</p>
      <div className='event-block'>
        <div className='graphic'>
          <div className='circle'></div>
          <div className='v-line'></div>
          <div className='circle'></div>
        </div>
        <div className='event-details'>
          <h4>{props.eventName}</h4>
          <p>Location: {props.location}</p>
          <p>Source: {props.source}</p>
          <p>Vessel: {props.vessel}</p>
          <p>Voyage: {props.voyage}</p>
        </div>
        </div>
    </div>
  )
}

export default Event;