import React from 'react';
import {NavigationBar} from './components/navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/home'
import About from './pages/About/about'
import Error from './pages/Error/error'
import SideNav from './components/sidebar/sideNav';
import RightSideBar from './components/right-sidebar/right-sidebar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavigationBar />
          <SideNav /> 
          <RightSideBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={Error} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
