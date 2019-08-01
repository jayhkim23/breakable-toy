import React, { Component } from 'react'
import TextField from '../components/TextField'
import NumberField from '../components/NumberField'

class TrainingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

      title: '',
      description: '',
      date: '',
      time: '',
      min: '',
      max: ''
    }

  this.handleFormSubmit = this.handleFormSubmit.bind(this)
  this.handleClearForm = this.handleClearForm.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let trainingObject = {
        title: this.state.title,
        description: this.state.description,
        date: this.state.date,
        time: this.state.time,
        min: this.state.min,
        max: this.state.max
    }
    this.props.addNewTraining(trainingObject)
    this.handleClearForm()
  }

  handleClearForm() {
    event.preventDefault();
    this.setState({
      title: '',
      description: '',
      date: '',
      time: '',
      min: '',
      max: '' })
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return(
        <div>
        <form className="new-review-form callout" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.title}
            handleInputChange={this.handleChange}
            label="Title"
            name="title"
          />
          <TextField
            content={this.state.description}
            handleInputChange={this.handleChange}
            label="Description"
            name="description"
          />
          <TextField
            content={this.state.date}
            handleInputChange={this.handleChange}
            label="Date"
            name="date"
          />
          <TextField
            content={this.state.time}
            handleInputChange={this.handleChange}
            label="Time"
            name="time"
          />
          <NumberField
            content={this.state.min}
            handleInputChange={this.handleChange}
            label="Minimum Number of Participants"
            name="min"
          />
          <NumberField
            content={this.state.max}
            handleInputChange={this.handleChange}
            label="Maximum Number of Participants"
            name="max"
          />
          <div className="button-group">
            <input className="button success" type="submit" value="Submit" />
            <button className="button" onClick={this.handleClearForm}>Clear</button>
          </div>
        </form>
        </div>
      )
    }
  }

  export default TrainingForm
