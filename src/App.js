import React, {Component} from 'react';

import routes from './utilities/router'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render(){
  return (
    <div className="App">
      {routes}
    </div>
  );
}
}

export default withRouter(App);

