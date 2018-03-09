import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shelves from './components/Shelves';
import Bins from './components/Bins';
import BinInfo from './components/BinInfo';
import CreateBinInfo from './components/CreateBinInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      
      
          <Router>
            <Switch>
              <Route exact path="/" component={Shelves} />
              <Route path="/bins/:shelfID" component={Bins} />
              <Route path="/bin/:shelfID:binID" component={BinInfo} />
              <Route path="/create/:shelfID:binID" component={CreateBinInfo} />
            </Switch>
          </Router>
       
      
    );
  }
}

export default App;
