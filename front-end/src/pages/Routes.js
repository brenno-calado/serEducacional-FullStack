import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Contacts from './Contacts';
import Register from './Register';
import NotFound from './NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/contacts" component={ Contacts } />
      <Route path="*" component={ NotFound } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
