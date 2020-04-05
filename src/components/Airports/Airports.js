import React, { useEffect, useReducer } from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  makeStyles,
  Box,
} from '@material-ui/core';
import { SentimentVeryDissatisfied } from '@material-ui/icons';
import List from 'components/Common/List';
import AirportCard from 'components/Airports/Card';
import api from 'api';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '0.5rem 0 1rem 0',
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  emptyBox: {
    margin: '1rem 0',
    textAlign: 'center',
  },
  cityBox: {
    textAlign: 'center',
  },
  sadIcon: {
    width: '10rem',
    height: '10rem',
    color: '#7F7F7F',
    opacity: 0.8,
  },
}));

const initialState = {
  city: '',
  airports: [],
  capitals: [],
  pending: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_CITY':
      return { ...state, city: action.payload.city, airports: [] };
    case 'FETCH_AIRPORTS':
      return {
        ...state,
        pending: true,
        error: false,
      };
    case 'FETCH_AIRPORTS_SUCCESS':
      return { ...state, pending: false, airports: action.payload.airports };
    case 'FETCH_AIRPORTS_FAILURE':
      return {
        ...state,
        pending: false,
        airports: [],
        error: true,
      };
    case 'FETCH_CAPITALS_SUCCESS':
      return { ...state, capitals: action.payload.capitals };
    default:
      return state;
  }
}

function Airports() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event) => {
    dispatch({ type: 'SET_CITY', payload: { city: event.target.value } });
  };

  const fetchCapitals = () => {
    const type = 'FETCH_CAPITALS';
    const callApi = async () => {
      try {
        const { data } = await api.get('/capitals');

        dispatch({
          type: `${type}_SUCCESS`,
          payload: { capitals: data.capitals },
        });
      } catch (e) {
        dispatch({ type: `${type}_FAILURE` });
      }
    };

    dispatch({ type });
    callApi();
  };

  const fetchAirports = () => {
    const type = 'FETCH_AIRPORTS';
    const callApi = async () => {
      try {
        const params = { city: state.city };
        const { data } = await api.get('/airports', { params });
        const airports = data ? data.airports || [] : [];

        dispatch({ type: `${type}_SUCCESS`, payload: { airports } });
      } catch (e) {
        dispatch({ type: `${type}_FAILURE` });
      }
    };

    if (state.city) {
      dispatch({ type });
      callApi(type);
    }
  };

  useEffect(fetchCapitals, []);
  useEffect(fetchAirports, [state.city]);

  const {
    city, airports, pending, capitals,
  } = state;
  const empty = city && !pending && !airports.length;

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="city-select">City</InputLabel>
        <Select
          native
          value={city}
          onChange={handleChange}
          inputProps={{
            name: 'City',
            id: 'city-select',
          }}
        >
          <option aria-label="None" value="" />
          {capitals.map(({ _id, capital }) => (
            <option key={_id} value={capital}>
              {capital}
            </option>
          ))}
        </Select>
      </FormControl>

      {empty && (
        <Box className={classes.emptyBox}>
          <SentimentVeryDissatisfied className={classes.sadIcon} />
          <div>Nothing was found.</div>
          <div>Please, change search parameter</div>
        </Box>
      )}

      {!city && (
        <Box className={classes.cityBox}>
          <div>Choose city to display airports</div>
        </Box>
      )}

      <List items={airports} component={AirportCard} pending={pending} />
    </>
  );
}

export default Airports;
