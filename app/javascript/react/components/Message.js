import React from 'react';

const Message = props => {
  return(
    <div id="message">
    {props.username}: {props.message}
    </div>
  );
};

export default Message;
