import React from 'react'
import { Link } from 'react-router-dom';

const TrainingTile = (props) => {

  return (

    <div className="training-tile panel callout" data-closable>
      <button className="alert close-button" aria-label="Close alert" type="button" onClick={() => props.handleDelete(props.id)} data-close>
        <span aria-hidden="true">&times;</span>
      </button>
      <div className='title'>
        <Link to={`/trainings/${props.id}`}>
          <h3>{props.title} | {props.date} | {props.time}</h3>
        </Link>
      </div>
    </div>
  )
}

export default TrainingTile
