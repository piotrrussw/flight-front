import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  Flight, LocationOn, Star, AccountCircle,
} from '@material-ui/icons';
import './navigation-bar.scss';
import useSessionContext from 'hooks/useSessionContext';

function NavigationBar() {
  const { sessionData } = useSessionContext();
  const { value } = sessionData.activePage;

  return (
    <BottomNavigation
      className="bottom-navigation"
      showLabels
      value={value}
      background="primary"
    >
      <BottomNavigationAction
        label="Flights"
        value="flights"
        href="/flights"
        icon={<Flight />}
      />
      <BottomNavigationAction
        label="Airports"
        value="airports"
        href="/airports"
        icon={<LocationOn />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        href="/favorites"
        icon={<Star />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        href="/profile"
        icon={<AccountCircle />}
      />
    </BottomNavigation>
  );
}

export default NavigationBar;
