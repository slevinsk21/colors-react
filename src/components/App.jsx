import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

// Global components
import Header from './Header';
import Layout from '../containers/Layout';
import Footer from './Footer';

const NoMatch = () => {
  const location = useLocation();
  return (
    <h2 style={{ fontSize: 200 }}>
      No match for <code>{location.pathname}</code>
    </h2>
  );
};

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>

        <Route path="/sand-box">
          <h1>sand-box</h1>
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
