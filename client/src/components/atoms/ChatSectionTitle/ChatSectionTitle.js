/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const StyledText = styled(Text)`
  color: #565656;
  font-size: 14px;
  font-weight: bold;
`;

const StyledDiv = styled.div`
  border-bottom-color: gainsboro;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const ChatSectionTitle = ({ children }) => (
  <StyledDiv>
    <StyledText>{children}</StyledText>
  </StyledDiv>
);

export default ChatSectionTitle;
