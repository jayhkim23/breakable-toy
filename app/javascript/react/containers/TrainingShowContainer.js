import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TrainingShow from '../components/TrainingShow'

class TrainingShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      training: {}
    }
  }

  componentDidMount() {
      let trainingId = this.props.match.params.id
      fetch(`/api/v1/trainings/${trainingId}`)
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
        debugger;
        this.setState({ training: body.training })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

    }

    render() {
      return(
        <div>
        <TrainingShow
        training={this.state.training}
        />
        </div>
      )
    }
  }

export default TrainingShowContainer;
