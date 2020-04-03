import React, { Component } from 'react';
import styled from 'styled-components';
import { sanitizePin, validatePin } from '../../../helpers/ValidationHelper';
import HbgLogo from '../../../assets/slides/stadsvapen.png';
import { Heading, Button, Input, Text } from '../../atoms';
import ScreenWrapper from '../../molecules/ScreenWrapper';
import withAuthentication from '../../organisms/withAuthentication';
import AuthLoading from '../../molecules/AuthLoading';
import UserContext from '../../../context/user-context';

const Logo = styled.img`
  height: 200px;
  width: auto;
`;

const LoginScreenWrapper = styled(ScreenWrapper)`
  background-color: #f5f5f5;
  padding: 16px;
  position: relative;
`;

const LoginFormFooter = styled.div`
  text-align: center;
`;

const Link = styled.button`
  text-decoration: underline;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`;

const LoginKeyboardAvoidingView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  height: 100%;
`;

const LoginHeader = styled.div`
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const LoginBody = styled.div`
  flex: 1;
  justify-content: flex-end;
`;

const LoginForm = styled.div`
  flex-grow: 0;
`;

const LoginFormField = styled.div`
  margin-bottom: 16px;
`;

const LoginFormHeader = styled.div`
  margin-bottom: 32px;
`;

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideLogo: false,
      validPin: false,
      personalNumberInput: '',
    };
  }

  componentDidMount() {
    // this.keyboardWillShowListener = Keyboard.addListener(
    //   'keyboardWillShow',
    //   () => this.setState({ hideLogo: true }),
    // );
    // this.keyboardWillHideListener = Keyboard.addListener(
    //   'keyboardWillHide',
    //   () => this.setState({ hideLogo: false }),
    // );
  }

  componentWillUnmount() {
    // this.keyboardWillShowListener.remove();
    // this.keyboardWillHideListener.remove();
  }

  changeHandler = event => {
    this.setState({
      personalNumberInput: sanitizePin(event.target.value),
      validPin: validatePin(event.target.value),
    });
  };

  submitHandler = () => {
    const { personalNumberInput } = this.state;

    if (personalNumberInput.length <= 0) {
      return;
    }

    if (!validatePin(personalNumberInput)) {
      alert('Felaktigt personnummer. Ange format ÅÅÅÅMMDDXXXX.');
      return;
    }

    this.authenticateUser(personalNumberInput);
  };

  /**
   * Authenticate user and navigate on success
   */
  authenticateUser = async personalNumber => {
    const { history } = this.props;
    const { setIsAuthenticated } = this.context;

    try {
      const { loginUser } = this.props.authentication;
      await loginUser(personalNumber);

      // TODO: Make better fix and move somewhere else
      // Remove anchor from url
      window.location.hash = '';

      // Updated global context authenticated to True
      setIsAuthenticated(true);

      history.push('/main/chat');
    } catch (e) {
      if (e.message !== 'cancelled') {
        console.info('Error in LoginScreen::authenticateUser', e.message);
      }
    }
  };

  render() {
    const { validPin, personalNumberInput, hideLogo } = this.state;
    const {
      isLoading,
      cancelLogin,
      resetUser,
      user,
      isBankidInstalled,
    } = this.props.authentication;

    if (isLoading) {
      return (
        <LoginScreenWrapper>
          <AuthLoading cancelLogin={cancelLogin} />
        </LoginScreenWrapper>
      );
    }
    return (
      <LoginScreenWrapper>
        <LoginKeyboardAvoidingView behavior="padding" enabled>
          <LoginHeader>
            {/* TODO: Hack to import image because import crashes  */}
            <Logo src={HbgLogo} alt="Logo" />
          </LoginHeader>
          <LoginBody>
            <LoginForm>
              <LoginFormHeader>
                <Heading>Logga in</Heading>
              </LoginFormHeader>

              <LoginFormField>
                <Input
                  type="text"
                  keyboardType="numeric"
                  placeholder="ÅÅÅÅMMDDXXXX"
                  value={personalNumberInput}
                  onChange={this.changeHandler}
                  maxLength={12}
                  center
                />
              </LoginFormField>

              <LoginFormField>
                <Button block color="purpleLight" onClick={this.submitHandler}>
                  <Text>Logga in med mobilt BankID</Text>
                </Button>
              </LoginFormField>

              <LoginFormFooter>
                <Link
                  as="a"
                  href="https://support.bankid.com/sv/bankid/mobilt-bankid"
                  target="_blank"
                >
                  Läs mer om hur du skaffar mobilt BankID
                </Link>
              </LoginFormFooter>
            </LoginForm>
          </LoginBody>
        </LoginKeyboardAvoidingView>
      </LoginScreenWrapper>
    );
  }
}

LoginScreen.contextType = UserContext;

export default withAuthentication(LoginScreen);
