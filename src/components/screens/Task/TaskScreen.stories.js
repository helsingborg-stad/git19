import React from 'react';
import TaskScreen from './TaskScreen';
import StoryWrapper from '../../molecules/StoryWrapper';
import { TasksProvider } from '../../../context/tasks-context';

export default {
  component: TaskScreen,
  title: 'TaskScreen',
};

export const defaultTaskScreen = () => (
  <StoryWrapper>
    <TasksProvider>
      <TaskScreen />
    </TasksProvider>
  </StoryWrapper>
);
