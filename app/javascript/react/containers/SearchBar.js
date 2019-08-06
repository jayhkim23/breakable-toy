import React, { Component } from 'react';
import TrainingTile from '../components/TrainingTile'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTrainings: [],
      searchString: '',
      redirect: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newSearchString = event.target.value
    this.setState({ searchString: newSearchString })
  }

  handleSubmit(event) {
    event.preventDefault()
    //this.props.history.push(`/trainings/${this.state.searchString}`);
    const body = JSON.stringify({
    search_string: this.state.searchString
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
    let allSearchTrainings = this.state.searchTrainings
    this.setState({ searchTrainings: allSearchTrainings.concat(body.trainings), redirect: true })
  })
    console.log(`Form submitted: ${this.state.searchString}`);
  }

  render() {
    let trainings = this.state.searchTrainings.map(training => {
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
      />
    )
  })

  if (this.state.redirect) {
    return <Redirect to={{
      pathname: '/trainings',
      state: {id: this.state.searchString}
    }}/>;
  }

    return(
      <div>
        <h1 className="home-page-title">TRAINING FC</h1>
          <div className="search-bar panel columns small-3 medium-6 large-6">
            <form onSubmit={this.handleSubmit}>
              <input
              type='text'
              name='searchString'
              value={this.state.searchString}
              placeholder='Choose your location:'
              onChange={this.handleChange}
              />
              <button className="search-button success" type="submit">
                Search
              </button>
            </form>
          </div>
      </div>
    )
  }
}


export default SearchBar;
