import React, { useEffect, useReducer } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TabPanel from 'components/Common/TabPanel';
import api from 'api';
import List from 'components/Common/List';
import AirportCard from 'components/Airports/Card';
import FlightCard from 'components/Flights/Card';
import useAuthContext from 'hooks/useAuthContext';

const initialState = {
  active: 'flights',
  pending: false,
  error: false,
  flights: [],
  airports: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ACTIVE':
      return { ...state, active: action.payload.active };
    case 'FETCH_FLIGHTS':
    case 'FETCH_AIRPORTS':
      return {
        ...state,
        flights: [],
        airports: [],
        pending: true,
        error: false,
      };
    case 'FETCH_FLIGHTS_SUCCESS':
      return {
        ...state,
        flights: action.payload.flights,
        pending: false,
      };
    case 'FETCH_AIRPORTS_SUCCESS':
      return {
        ...state,
        airports: action.payload.airports,
        pending: false,
      };
    case 'FETCH_FLIGHTS_FAILURE':
    case 'FETCH_AIRPORTS_FAILURE':
      return {
        ...state,
        flights: [],
        airports: [],
        pending: false,
        error: true,
      };
    default:
      return state;
  }
}

function Favorites() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    state: { token },
  } = useAuthContext();
  const handleTabChange = (event, active) => dispatch({ type: 'SET_ACTIVE', payload: { active } });
  const tabProps = (value) => ({
    id: `wrapped-tab-${value}`,
    'aria-controls': `wrapped-tabpanel-${value}`,
    label: value,
    value,
  });

  const callApi = async (url, type, mounted) => {
    try {
      const { data } = await api(token).get(url);
      const payload = {};
      payload[state.active] = data[state.active];

      if (mounted) dispatch({ type: `${type}_SUCCESS`, payload });
    } catch (e) {
      if (mounted) dispatch({ type: `${type}_FAILURE` });
    }
  };

  const updateList = () => {
    let mounted = true;
    const type = `FETCH_${state.active.toUpperCase()}`;
    const url = `/user/${state.active}`;

    if (mounted) {
      dispatch({ type });
      callApi(url, type, mounted);
    }

    return () => {
      mounted = false;
    };
  };

  useEffect(updateList, [state.active]);

  const {
    active, flights, airports, pending,
  } = state;

  return (
    <>
      <Tabs
        value={active}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab {...tabProps('flights')} />
        <Tab {...tabProps('airports')} />
      </Tabs>

      <TabPanel value={active} index="flights">
        <List
          items={flights}
          pending={pending}
          component={FlightCard}
          deletable
        />
      </TabPanel>

      <TabPanel value={active} index="airports">
        <List
          items={airports}
          pending={pending}
          component={AirportCard}
          deletable
        />
      </TabPanel>
    </>
  );
}

export default Favorites;
