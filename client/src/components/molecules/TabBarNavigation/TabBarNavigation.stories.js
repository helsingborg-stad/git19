import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import StoryWrapper from '../StoryWrapper';
import TabBarNavigation from './TabBarNavigation';
import ChatScreen from '../../screens/ChatScreen';

const tabItems = [
  { tabIcon: 'message', tabText: 'Prata med oss', onClick: action('message clicked') },
  { tabIcon: 'home', tabText: 'Mitt HBG', onClick: action('home clicked') },
  { tabIcon: 'contacts', tabText: 'Profile', onClick: action('profile clicked') },
];

export default {
  component: TabBarNavigation,
  title: 'TabBarNavigation',
};

export const Default = () => (
  <StoryWrapper>
    <TabBarNavigation tabItems={tabItems} />
  </StoryWrapper>
);

export const TabNavWithChat = () => (
  <StoryWrapper>
    <ChatScreen />
    <TabBarNavigation />
  </StoryWrapper>
);
