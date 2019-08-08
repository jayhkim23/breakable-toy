import React from 'react'

const TextField = (props) => {
  return (
    <label id="input-label">{props.label}
      <input id="form-field"
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
