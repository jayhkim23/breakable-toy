import React from 'react';

const TextFieldWithSubmit = props => {
  return (
    <div className='input-group'>
      <input
        id='input-group-field'
        name={props.name}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}/>
      <input className='input-group-button' type='submit' className='button' value='Send'/>
    </div>
  );
}

export default TextFieldWithSubmit;
