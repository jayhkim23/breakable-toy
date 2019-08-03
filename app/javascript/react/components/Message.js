import React from 'react';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';

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
