import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import ChatDivider from './ChatDivider';

export default {
  component: ChatDivider,
  title: 'ChatDivider',
};

export const Default = () => (
  <StoryWrapper>
    <ChatDivider title="Here goes the Title" info="Here goes some info text" />
  </StoryWrapper>
);
