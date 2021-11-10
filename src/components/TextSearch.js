import React from "react";
import '../styles/TextSearch.css'
import {GrCircleInformation} from 'react-icons/gr'

function TextSearch(props) {
  return (
    <div className='search-container'>
      <input type='text' placeholder={props.placeholder}></input>
      <form className='text-input-info'>
        <GrCircleInformation />
        <p>{props.info}</p>
      </form>
    </div>
  )
}

export default TextSearch;