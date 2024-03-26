// PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "./auth/authService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      AuthService.getCurrentUser() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/sign-in", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
