import React from "react";
import '../styles/SelectBox.css'

function SelectBox(props) {
  const enumerateOptions = props.options.map(option => <option key={option} name={option} id={option}>{option}</option>)

  return (
    <select>
      <option name={props.placeholder} id={props.placeholder}>{props.placeholder}</option>
      {enumerateOptions}
    </select>
  )
}

export default SelectBox;