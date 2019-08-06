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
      city: '',
      state: '',
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
        city: this.state.city,
        state: this.state.state,
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
      city: '',
      state: '',
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
            placeholder="MM/DD/YYYY"
            name="date"
          />
          <TextField
            content={this.state.time}
            handleInputChange={this.handleChange}
            label="Time"
            name="time"
          />
          <div className="city-state-field ">
          <TextField className="city column"
            content={this.state.city}
            handleInputChange={this.handleChange}
            label="City"
            name="city"
          />
          <TextField className="state column"
            content={this.state.state}
            handleInputChange={this.handleChange}
            label="State"
            name="state"
          />
          </div>
          <div className="number-field">
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
          </div>
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
