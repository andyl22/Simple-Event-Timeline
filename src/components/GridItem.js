import React from "react";
import ContainerDetails from "./ContainerDetails";
import RecentRequests from "./RecentRequests";
import '../styles/GridItem.css'

function GridItem(props) {
  return (
    <div className='grid-item'>
      {
        (props.type === 'ContainerDetails') ? <ContainerDetails /> : <RecentRequests />
      }
    </div>
  )
}

export default GridItem;