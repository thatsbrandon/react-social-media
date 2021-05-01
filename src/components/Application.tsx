import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import RegisterPage from './auth/RegisterPage';
import LoginPage from './auth/LoginPage';

const Application = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/">
          <Home /> {/* Show either App or register component */}
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default Application;