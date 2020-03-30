import React, { createContext, useState } from 'react';

const initialState = {
  activePage: {
    title: 'Explore flights',
    value: 'flights',
  },
  user: null,
};

const SessionContext = createContext(initialState);

const SessionProvider = (props) => {
  const [sessionData, setSessionData] = useState(initialState);

  return (
    <SessionContext.Provider
      value={{ sessionData, setSessionData }}
      {...props}
    />
  );
};

export { SessionContext };
export default SessionProvider;
