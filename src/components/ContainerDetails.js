import React from "react";
import '../styles/ContainerDetails.css'
import ContainerDetailSummary from "./ContainerDetailSummary";
import Tabs from "./Tabs";
import Events from "./Events";

function ContainerDetails(props) {
  return (
    <div className='container-details'>
      <h2>Container Details</h2>
      <div className='h-line'></div>
      <ContainerDetailSummary containerID={props.containerID}/>
      <Tabs tabName='Events'/>
      <Events />
    </div>
  )
}

export default ContainerDetails;