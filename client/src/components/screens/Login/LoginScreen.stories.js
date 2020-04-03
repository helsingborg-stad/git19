import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import LoginScreen from './LoginScreen';

export default {
  component: LoginScreen,
  title: 'Login Screen',
};

export const Login = () => (
  <StoryWrapper>
    <LoginScreen />
  </StoryWrapper>
);
