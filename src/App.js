import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PiecesPage from "./pages/PiecesPage";
import PiecePage from "./pages/PiecePage";
import NavBar from "./navBar";
import AdminPage from "./pages/AdminPage";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PrivateRoute from "./components/_privateRoute";
import { LinearProgress } from "@material-ui/core";
import SimpleReactLightbox from "simple-react-lightbox";
import Footer from "./components/_footer";
import NoRoutePage from "./pages/NoRoutePage";
import ResumePage from "./pages/ResumePage";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Router history={history}>
      <NavBar />
      <div className="body">
        <SimpleReactLightbox>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/web" component={PiecesPage} />
            <Route path="/art" component={PiecesPage} />
            <Route path="/music" component={PiecesPage} />
            <Route path="/piece/:name" component={PiecePage} />
            <Route path="/resume" component={ResumePage} />
            <PrivateRoute path="/cs-admin" component={AdminPage} />
            <Route path="*" component={NoRoutePage} />
          </Switch>
        </SimpleReactLightbox>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
