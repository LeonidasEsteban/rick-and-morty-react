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
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Character} />
          <Route path={`${process.env.PUBLIC_URL}/:id`} exact component={Character} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
