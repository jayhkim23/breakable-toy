import React from 'react';

const TrainingShow = (props) => {
  return(
    <div className="training-show columns large-4">
      <h2>{props.training.title}</h2>
      <p><i>{props.training.description}</i></p>
      <p>When: {props.training.date} @ {props.training.time}</p>
      <p>Where: {props.training.city}, {props.training.state}</p>
      <p>Looking for: {props.training.min} - {props.training.max} players</p>
    </div>
  )
}

export default TrainingShow;
