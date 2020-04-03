/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ScreenWrapper = props => (
  <ThemeProvider theme={theme}>
    <Container className={props.className}>{props.children}</Container>
  </ThemeProvider>
);

export default ScreenWrapper;
