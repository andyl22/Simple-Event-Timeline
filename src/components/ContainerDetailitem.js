import React from "react";
import '../styles/ContainerDetailItem.css'

function ContainerDetailItem(props) {
  return (
    <div clasName='container-detail'>
      <p className='field-name'>{props.fieldName}</p>
      <p className='field-value'>{props.fieldValue}</p>
    </div>
  )
}

export default ContainerDetailItem;