import React from 'react'
import { Link } from 'react-router-dom';

const TrainingTile = (props) => {

  return (
    <div className="review-tile panel">
      <div className='title'>
      <Link to={`/trainings/${props.id}`}>
      <h3>{props.title} | {props.date} | {props.time}</h3>
      </Link>
      </div>
    </div>
  )
}

export default TrainingTile
