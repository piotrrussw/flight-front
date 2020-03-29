import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Login from 'components/Login';
import Home from 'components/Home';
import Register from 'components/Register';
import useAuthContext from 'hooks/useAuthContext';
import Profile from 'components/Profile';
import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import Flights from 'components/Flights';
import Airports from 'components/Airports';
import Favorites from 'components/Favorites';

function Router() {
  const { authenticated } = useAuthContext();
  const redirectUrl = authenticated ? '/flights' : '/';

  return (
    <Switch>
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/sign-up" component={Register} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/flights" component={Flights} />
      <PrivateRoute exact path="/airports" component={Airports} />
      <PrivateRoute exact path="/favorites" component={Favorites} />
      <Redirect from="*" to={redirectUrl} />
    </Switch>
  );
}

export default Router;
