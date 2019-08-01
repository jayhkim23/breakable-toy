import React from 'react';

const TrainingShow = (props) => {
  return(
    <div className="training-show">
      <h2>{props.training.title}</h2>
      <p>{props.training.description}</p>
      <p>When: {props.training.date} @ {props.training.time}</p>
      <p>Looking for: {props.training.min} - {props.training.max} players</p>
    </div>
  )
}

export default TrainingShow;
