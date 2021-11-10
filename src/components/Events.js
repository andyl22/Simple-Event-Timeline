import React from "react";
import Event from './Event';

function Events() {
  return (
    <section className='events'>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>
      <Event eventName='Vessel Arrival' location='Los Angeles' source ='EDI' vessel='Voyager' voyage = '123SE'/>    
    </section>
  )
}

export default Events;