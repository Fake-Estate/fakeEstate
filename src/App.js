import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import Fake from './components/aws/Fake'

import Router from './utilities/router'
// import { withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types'

// Stylesheets
import './reset.css'


class App extends Component {
  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }
  render(){
  return (
    <div className="App">
      <Navbar />
      <Fake />
      {Router}
    </div>
  );
}
}

export default App;

