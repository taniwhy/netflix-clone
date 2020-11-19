import React from "react";
import { Route, Redirect } from "react-router-dom";

type isUserRedirectProps = {
  user: any;
  loggedInPath: string;
};

type protectedRouteProps = {
  user: any;
};

export const IsUserRedirect: React.FC<isUserRedirectProps> = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};

export const ProtectedRoute: React.FC<protectedRouteProps> = ({
  user,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
