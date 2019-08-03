import React from 'react';

const Message = props => {
  return(
    <div>
    <p>
      {props.username}: {props.message}
    </p>
    </div>
  );
};

export default Message;
