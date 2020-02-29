import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebPage from './pages/WebPage';
import PiecePage from './pages/PiecePage';
import NavBar from './navBar'


function App() {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/web" component={WebPage} />
          <Route path="/piece/:name" component={PiecePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
