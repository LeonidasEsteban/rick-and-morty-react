import React from 'react';
import './nprogress.css';
import GlobalStyle from './global-styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Character from './character'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Character} />
          <Route path="/:id" exact component={Character} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
