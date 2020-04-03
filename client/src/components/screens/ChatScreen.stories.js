import React from 'react';
import StoryWrapper from '../molecules/StoryWrapper';
import ChatScreen from './ChatScreen';

export default {
  component: ChatScreen,
  title: 'Screens',
};

export const Chat = () => (
  <StoryWrapper>
    <ChatScreen />
  </StoryWrapper>
);
