import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import ChatSectionTitle from './ChatSectionTitle';

export default {
  component: ChatSectionTitle,
  title: 'ChatSectionTitle',
};

export const Default = () => (
  <StoryWrapper>
    <ChatSectionTitle>Example text to fill ChatSectionTitle</ChatSectionTitle>
  </StoryWrapper>
);
