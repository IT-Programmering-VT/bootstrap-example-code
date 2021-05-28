import { BrowserRouter, Route, Switch } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Login from "./pages/Login";
import ButtonBar from "./components/ButtonBar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">React Bootstrap Example</h1>
          <h2>
            <ButtonBar />
          </h2>
          <h2>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/users" exact component={Users} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </h2>
        </Jumbotron>
      </Container>
    </BrowserRouter>
  );
}

export default App;

/*
We set up a simple routing with the components from our pages folder
the button bar is above the switch so we can see it/use it on all of our pages
we import special components from react bootstrap
*/
