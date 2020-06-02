import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WebPage from "./pages/WebPage";
import ArtPage from "./pages/ArtPage";
import DesignPage from "./pages/DesignPage";
import MusicPage from "./pages/MusicPage";
import PiecePage from "./pages/PiecePage";
import NavBar from "./navBar";
import AdminPage from "./pages/AdminPage";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/_privateRoute";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router history={history}>
      <div className="body">
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/web" component={WebPage} />
          <Route path="/art" component={ArtPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/design" component={DesignPage} />
          <Route path="/piece/:name" component={PiecePage} />
          <PrivateRoute path="/cs-admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
