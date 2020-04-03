/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import UserContext from '../context/user-context';

export const PrivateRoute = ({ route, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    // TODO: Implement check towards localstorage token.
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <route.component {...props} routes={route.routes} />
        ) : (
          <Redirect to={{ pathname: `${route.redirectTo}` }} />
        )}
    />
  );
};

export const PublicRoute = ({ route, ...rest }) => (
  <Route {...rest} render={props => <route.component {...props} routes={route.routes} />} />
);

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
export function RouteWithSubRoutes(route) {
  const { path, exact, private: privateRoute } = route;
  const RouteComponent = privateRoute ? PrivateRoute : PublicRoute;

  return <RouteComponent path={path} exact={exact} route={route} />;
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export const RenderRoutes = ({ routes, ...rest }) => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={route.key} {...route} {...rest} />
    ))}
  </Switch>
);

RenderRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
