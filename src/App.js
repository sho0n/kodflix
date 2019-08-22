import React from 'react';
import './App.css';
import Details from './Details'
import Gallery from './Gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path='/' component={Gallery} /> 
          <Route exact path='/:details' component={Details} /> 
        </div>
      </Router>     
       
   
    );
  }

export default App;
