import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TrainingsIndexContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      trainings: []
    }
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
      this.setState( {trainings: body} )
    })
    .catch(error => console.error(error.message))
  }

  render(){

    return(
      <div>
          <h1> Training Index React </h1>
      </div>
    )
  }
}

export default TrainingsIndexContainer;
