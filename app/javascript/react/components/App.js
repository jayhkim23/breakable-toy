import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TrainingsIndexContainer from "../containers/TrainingsIndexContainer"
import TrainingShowContainer from "../containers/TrainingShowContainer"
import SearchBar from "../containers/SearchBar"

export const App = (props) => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={SearchBar}/>
      <Route exact path='/trainings' component={TrainingsIndexContainer}/>
      <Route exact path='/trainings/:id' component={TrainingShowContainer}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
