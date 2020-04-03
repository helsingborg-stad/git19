import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import ChatBody from './ChatBody';

export default {
  component: ChatBody,
  title: 'ChatBody',
};

export const Default = () => (
  <StoryWrapper>
    <ChatBody>Example text to filll ChatBody </ChatBody>
  </StoryWrapper>
);
