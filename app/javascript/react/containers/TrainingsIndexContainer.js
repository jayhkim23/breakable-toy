import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TrainingForm from './TrainingForm'
import TrainingTile from '../components/TrainingTile'

class TrainingsIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      trainings: [],
      newTraining: ''
    }

    this.addNewTraining = this.addNewTraining.bind(this)
  }

  addNewTraining(trainingObject) {
    fetch("/api/v1/trainings", {
      credentials: 'same-origin',
      method: "POST",
      body: JSON.stringify(trainingObject),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.json())
  .then(body => {
    // console.log(body)
    let allTrainings = this.state.trainings
    this.setState({ trainings: allTrainings.concat(body.training) })
    console.log(this.state.trainings)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  componentDidMount(){
    fetch("/api/v1/trainings")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = 'Something went wrong!'
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState( {trainings: body.trainings} )
    })
    .catch(error => console.error(error.message))
  }

  render(){
    let trainings = this.state.trainings.map(training => {
      return(
        <TrainingTile
          key={training.id}
          id={training.id}
          title={training.title}
          description={training.description}
          date={training.date}
          time={training.time}
          min={training.min}
          max={training.max}
        />
      )
    })

    return(
    <div className="row">
      <div className="training-index columns large-8">
        {trainings}
      </div>
        <div className="training-form sticky columns large-4 panel">
        <TrainingForm
          addNewTraining={this.addNewTraining}
        />
      </div>
    </div>
    )
  }
}

export default TrainingsIndexContainer;
