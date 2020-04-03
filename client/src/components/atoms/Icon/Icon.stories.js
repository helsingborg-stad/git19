import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import StoryWrapper from '../../molecules/StoryWrapper';
import Icon from './Icon';

storiesOf('Icon', module).add('Material', () => (
  <StoryWrapper>
    <Icon size={48} name="Md3DRotation" />
  </StoryWrapper>
));
