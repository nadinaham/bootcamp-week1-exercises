import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Home from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Containers/Home/Home.js'
import Greet from '/Users/nadine/bootcamp-week1-exercises/personal-assistant/src/Containers/Greet/Greet.js'

const App = () => (
  <Router>
        <div className="App">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Greet} />
          </Switch>
        </div>
  </Router>
)

export default App
