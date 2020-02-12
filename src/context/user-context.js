import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';
import { authenticated } from '../helpers/AuthHelper';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const initAuthenticated = authenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initAuthenticated);
  const contextValue = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.object,
};

const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };
export default UserContext;
