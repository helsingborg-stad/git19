import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const ChatDividerLine = styled.div`
  height: 1px;
  width: 100%;
  flex: 1;
  background-color: ${props => props.theme.border.default};
  align-self: stretch;
  /* margin-vertical: 6px; */
  flex-shrink: 0;
`;

const ChatDividerWrapper = styled.div`
  align-self: stretch;
  margin-top: 48px;
  margin-bottom: 24px;
  margin-left: 16px;
  margin-right: 16px;
`;

const ChatDividerTitle = styled(Text)`
  text-align: center;
  flex: 1;
  flex-shrink: 0;
  margin-bottom: 4px;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
`;

const DividerInfo = styled(Text)`
  text-align: center;
  flex: 1;
  flex-shrink: 0;
  font-size: 12px;
`;

const ChatDivider = ({ title, info }) => (
  <ChatDividerWrapper>
    <ChatDividerTitle>{title}</ChatDividerTitle>
    <ChatDividerLine />
    <DividerInfo>{info}</DividerInfo>
  </ChatDividerWrapper>
);

export default ChatDivider;
