import React from 'react';
import styled from 'styled-components';

import StoryWrapper from '../../molecules/StoryWrapper';
import WatsonAgent from './WatsonAgent';
import withChatForm from '../withChatForm';
import Chat from '../Chat';
import InputForm from '../../molecules/InputForm';

import DarthVaderAgent from './DarthVaderAgent';

const ModifiedStoryWrapper = styled(StoryWrapper)`
  padding-left: 0;
  padding-right: 0;
`;

export default {
  title: 'WatsonAgent',
  component: WatsonAgent,
};

export const Default = () => (
  <ModifiedStoryWrapper>
    <Chat ChatAgent={DarthVaderAgent} ChatUserInput={withChatForm(InputForm)} />
  </ModifiedStoryWrapper>
);
