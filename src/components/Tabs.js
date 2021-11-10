import React from "react";
import '../styles/Tabs.css'

function Tabs(props) {
  return (
    <div className='tabs'>
      <div className='tab'>
        <p>{props.tabName}</p>
      </div>
    </div>
  )
}

export default Tabs;