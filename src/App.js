import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemsList from "./components/Items-List";
import Card from "./components/Card";
import ErrorBoundary from "./components/ErrorBoundary";
import Container from '@mui/material/Container';


function App() {
  return (
    <ErrorBoundary>
      <Router>
      <Container maxWidth="lg">
          <Switch>
            <Route path="/:id">
              <Card />
            </Route>
            <Route exact path="/">
              <ItemsList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
