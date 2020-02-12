import decode from 'jwt-decode';
import { TOKEN_KEY, USER_KEY } from '../services/StorageService';

/**
 * Check if token is expired
 */
export const isTokenExpired = token => {
  try {
    const decoded = decode(token);
    if (decoded.exp > Math.floor(Date.now() / 1000)) {
      return false;
    }
    return true;
  } catch (err) {
    console.log('Token is expired');
    return true;
  }
};

/**
 * Login user. Saves user and token to storage
 */
export const logIn = ({ user, token }) => {
  if (isTokenExpired(token)) {
    return false;
  }

  window.localStorage.setItem(TOKEN_KEY, token);

  return true;
};

/**
 * Clear access token
 */
export const logOut = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

/**
 * Retrieves the access token from local storage
 */
export const getToken = () => window.localStorage.getItem(TOKEN_KEY);

/**
 * Checks if there is a saved token and is still valid
 */
export const authenticated = () => {
  const token = getToken();

  return !!token && !isTokenExpired(token);
};
