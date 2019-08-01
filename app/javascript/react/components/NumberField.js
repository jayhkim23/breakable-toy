import React from 'react';

const NumberField = (props) => {
  return (
    <label>{props.label}
      <input
        name={props.name}
        type='number'
        min='2'
        max='100'
        value={props.content}
        onChange={props.handleInputChange}
      />
    </label>
  );
}

export default NumberField;
