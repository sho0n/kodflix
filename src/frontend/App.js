import React from 'react';
import './App.css';
import Details from './Details/Details.js'
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound.js';
import Nav from './Nav';
//this is a comment
function App() {
  return (

    <Router>
      <div className="App">
        
        <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:tvShowId' component={Details} />
        </Switch>
      </div>
    </Router>



  );
}

export default App;
