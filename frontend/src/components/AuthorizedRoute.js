import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import UnauthorizedMessage from './UnauthorizedMessage';

// Higher order component that takes care of rendering the unauthorized message when the user is not logged in
// We use <AuthorizedRoute> in our App.js instead of <Route>
const AuthorizedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.session.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <UnauthorizedMessage />
        )
      }
    />
  );
};

export default AuthorizedRoute;
