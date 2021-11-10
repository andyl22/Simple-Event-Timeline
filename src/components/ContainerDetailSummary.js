import React from "react";
import ContainerDetailItem from "./ContainerDetailitem";
import '../styles/ContainerDetailSummary.css'

function ContainerDetailSummary(props) {
  return (
    <section className='container-detail-summary'>
      <ContainerDetailItem fieldName='Container ID' fieldValue={props.containerID}/>
      <ContainerDetailItem fieldName='Container Type' fieldValue='40ST'/>
      <ContainerDetailItem fieldName='Container Owner' fieldValue='Compagnie Maritime Affrement'/>
      <ContainerDetailItem fieldName='Container Reefer' fieldValue='No'/>
    </section>
  )
}

export default ContainerDetailSummary;