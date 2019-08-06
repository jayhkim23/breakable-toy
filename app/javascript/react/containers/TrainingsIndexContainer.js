import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TrainingForm from './TrainingForm'
import TrainingTile from '../components/TrainingTile'

class TrainingsIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      trainings: [],
      search: ''
    }

console.log(this.props.location.state.id)
    this.addNewTraining = this.addNewTraining.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteTraining = this.deleteTraining.bind(this)
  }

  handleDelete(id){

    fetch(`/api/v1/trainings/${id}`,
    { credentials: 'same-origin',
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      }).then((response) => {
        console.log('Item was deleted!')
          this.deleteTraining(id)
        })
    }

    deleteTraining(id){
      let newTrainings = this.state.trainings.filter((training) => training.id !== id)
    this.setState({
      trainings: newTrainings
    })
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
    let allTrainings = this.state.trainings
    this.setState({ trainings: allTrainings.concat(body.training) })
    console.log(this.state.trainings)
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  componentDidMount(){
    if (this.props.location.state.id) {
      const body = JSON.stringify({
        search_string: this.props.location.state.id
      })
      fetch('/api/v1/trainings/search.json', {
        method: 'POST',
        body: body,
        credentials: 'same-origin',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(body => {
        console.log(body)
        this.setState( {trainings: body.trainings} )
      })
    } else {
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
          city={training.city}
          state={training.state}
          min={training.min}
          max={training.max}
          handleDelete={this.handleDelete}
        />
      )
    })

    return(
    <div className="row">
      <h1 className="location"> {this.props.location.state.id} </h1>
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
