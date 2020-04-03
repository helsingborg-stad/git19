import React, { PureComponent } from 'react';
import { logIn, logOut } from '../../helpers/AuthHelper';
import StorageService, { USER_KEY } from '../../services/StorageService';
import {
  authorize,
  bypassBankid,
  cancelBankidRequest,
  resetCancel,
} from '../../services/UserService';

const FAKE_PERSONAL_NUMBER = '201111111111';
const FAKE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbm8iOiIxOTc0MDYwMjc4MjYiLCJpYXQiOjE1ODEwNjQ4OTIsImV4cCI6MTYxMjYwMDg5Mn0.JCBvQ3cbd-2b6jvdwhSoC7AxJ9DVML11OSlWZvFZG8o';

/**
 * Wraps a react component with user authentication component.
 *
 * @param {*} WrappedComponent
 *
 * example usage:
 *  export default withAuthentication(LoginScreen)
 *
 * from within the WrappedComponent (eg. LoginScreen) we can use:
 *  props.authentication.loginUser(), props.authentication.isLoading etc
 *
 */
const withAuthentication = WrappedComponent =>
  class WithAuthentication extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        user: {},
        isLoading: false,
        isBankidInstalled: false,
      };
    }

    componentDidMount() {
      this._ismounted = true;
      // this._setUserAsync();
      // this._isBankidInstalled();
    }

    componentWillUnmount() {
      this._ismounted = false;
    }

    /**
     * Make authenticate request and log in user
     */
    loginUser = async personalNumber => {
      try {
        this.setState({
          isLoading: true,
        });

        // TODO: Safe to keep in production?
        if (
          personalNumber === FAKE_PERSONAL_NUMBER &&
          process.env.REACT_APP_APP_ENV === 'development'
        ) {
          return await this._fakeLogin(personalNumber);
        }

        const authResponse = await authorize(personalNumber);
        if (authResponse.ok !== true) {
          throw new Error(authResponse.data);
        }

        try {
          const { user, accessToken } = authResponse.data;
          const loggedIn = logIn({ user, token: accessToken });
          if (!loggedIn) {
            throw new Error('Login failed');
          }
        } catch (error) {
          throw new Error('Login failed');
        }

        return authResponse.data;
      } catch (error) {
        // TODO: Add dynamic error messages
        console.log('Authentication error: ', error);
        throw error;
      } finally {
        this.setState({
          isLoading: false,
        });
        // Reset cancel variable when done
        resetCancel();
      }
    };

    /**
     * Cancel BankID login request
     */
    cancelLogin = async () => {
      try {
        cancelBankidRequest('auth');
        return true;
      } catch (error) {
        console.log(error);
      } finally {
        // Clears access token and reset state
        logOut();
        this.setState({
          isLoading: false,
        });
      }
    };

    /**
     * Remove user from state, to be able to login as another user
     */
    resetUser = async () => {
      this.setState({
        user: {},
      });
    };

    /**
     * Simulate login using fake user
     */
    _fakeLogin = async personalNumber => {
      try {
        const response = await bypassBankid(personalNumber);
        const { user } = response.data;

        try {
          logIn({ user, token: FAKE_TOKEN });
        } catch (e) {
          // BY PASS REJECTION
          // throw "Login failed";
        }

        return {
          user,
          FAKE_TOKEN,
        };
      } catch (e) {
        throw e;
      }
    };

    /**
     * Get user from async storage and add to state
     */
    _setUserAsync = async () => {
      try {
        const user = await StorageService.getData(USER_KEY);
        if (typeof user !== 'undefined' && user !== null) {
          this.setState({ user });
          // Login the user automatically
          // TODO: Fix if user is already logged in
          // this.loginUser(user.personalNumber);
        }
      } catch (error) {
        console.log('Something went wrong', error);
      }
    };

    /**
     * Check if BankID app is installed on this machine
     */
    _isBankidInstalled = async () => {
      // const isBankidInstalled = await canOpenUrl('bankid:///');
      // if (isBankidInstalled && this._ismounted) {
      //   this.setState({ isBankidInstalled: true });
      // }
    };

    render() {
      const { state, props, loginUser, cancelLogin, resetUser } = this;
      const instanceMethods = {
        loginUser,
        cancelLogin,
        resetUser,
      };
      const injectProps = {
        ...instanceMethods,
        ...state,
      };

      return (
        <WrappedComponent
          authentication={{
            ...injectProps,
          }}
          {...props}
        />
      );
    }
  };

export default withAuthentication;
