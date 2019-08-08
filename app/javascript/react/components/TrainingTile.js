import React from 'react'
import { Link } from 'react-router-dom';

const TrainingTile = (props) => {

  return (

    <div className="callout" data-closable>
        <Link to={`/trainings/${props.id}`}>
          <h3 className="training-tile">
          <button className="close-button" aria-label="Close alert" type="button" onClick={() => props.handleDelete(props.id)} data-close>
            <i className="glyphicon glyphicon-remove"></i>
          </button>
          {props.title} | {props.date} | {props.time}</h3>
        </Link>
    </div>
  )
}

export default TrainingTile
