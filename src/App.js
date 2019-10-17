import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'

import Router from './utilities/router'

// Stylesheets
import './reset.css'


class App extends Component {
  render(){
  return (
    <div className="App">
      <div>
      <Navbar />
      </div>
      <div className="router">
      {Router}
      </div>
    </div>
    
  );
}
}

export default App;

