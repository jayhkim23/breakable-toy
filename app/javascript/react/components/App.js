import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import TrainingsIndexContainer from "../containers/TrainingsIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route path='/trainings' component={TrainingsIndexContainer}/>
    </BrowserRouter>
  )
}

export default App
