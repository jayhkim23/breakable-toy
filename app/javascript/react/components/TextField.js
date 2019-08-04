import React from 'react'

const TextField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        placeholder={props.placeholder}
        type="text"
        value={props.content}
        onChange={props.handleInputChange}
      />
    </label>
  );
}
export default TextField;
