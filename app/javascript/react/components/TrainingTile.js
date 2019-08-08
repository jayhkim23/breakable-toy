import React from 'react'
import { Link } from 'react-router-dom';

const TrainingTile = (props) => {

  return (

    <div className="training-tile" data-closable>
    <button className="close-button" aria-label="Close alert" type="button" onClick={() => props.handleDelete(props.id)} data-close>
      <i className="glyphicon glyphicon-remove"></i>
    </button>
        <Link to={`/trainings/${props.id}`}>
          <h3 className="training-header"> {props.title} | {props.date} | {props.time}</h3>
        </Link>
    </div>
  )
}

export default TrainingTile
