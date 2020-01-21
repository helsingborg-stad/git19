import { isMobile, isAndroid, isIOS } from 'react-device-detect';

/**
 * Test if URL can be opened
 * TODO: Convert to web
 * @param {string} url
 */
export const canOpenUrl = url => true;
// return Linking.canOpenURL(url)
//   .then((supported) => {
//     if (supported) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   .catch((err) => {
//     console.error('An error occurred', err);
//     return false;
//   });

/**
 *
 * @param {obj} queryParams
 */
const encodeQueryData = queryParams => {
  const data = [];
  for (const d in queryParams) {
    data.push(`${encodeURIComponent(d)}=${encodeURIComponent(queryParams[d])}`);
  }

  return data.join('&');
};

/**
 * Builds a service request url
 * @param {string} endpoint
 * @param {obj} params
 */
export const buildServiceUrl = (endpoint = '', params = {}) => {
  let queryParams = { apikey: process.env.REACT_APP_MITTHELSINGBORG_IO_APIKEY || '' };
  // Concatenate params
  queryParams = { ...params, ...queryParams };
  // Build query url
  const queryUrl = encodeQueryData(queryParams);
  // Trim slashes
  endpoint = endpoint.replace(/^\/|\/$/g, '');
  // Build url
  const url = `${process.env.REACT_APP_MITTHELSINGBORG_IO}/${endpoint}?${queryUrl}`;

  return url;
};

/**
 * Builds the BankID client URL
 * @param {string} autoStartToken
 */
export const buildBankIdClientUrl = autoStartToken => {
  let params;
  let bankIdAppUrl;

  console.log('window.location.href', window.location.href);

  if (isIOS) {
    params = `?autostarttoken=${autoStartToken}&redirect=${encodeURI(window.location.href)}`;
    bankIdAppUrl = 'https://app.bankid.com/';
  } else {
    params = `?autostarttoken=${autoStartToken}&redirect=null`;
    bankIdAppUrl = 'bankid:///';
  }

  return `${bankIdAppUrl}${params}`;
};
