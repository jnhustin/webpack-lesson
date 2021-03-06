import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Popular  from './Popular';
import Nav      from './Nav';
import Home     from './Home';
import Battle   from './Battle.jsx';
import Result   from './Result';

class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Result} />
            <Route render={ () => <p>Not Found</p> } />
          </Switch>
        </div>
        
      </Router>
    );
  }
}

export default App;