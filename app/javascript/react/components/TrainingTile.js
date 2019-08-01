import React from 'react'

const TrainingTile = (props) => {

  return (
    <div className="review-tile panel">
      <div className='title'>
      <h3>{props.title} | {props.date} | {props.time}</h3>
      </div>
    </div>
  )
}

export default TrainingTile
