/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryWrapper from '../../molecules/StoryWrapper';
import withForm from './withForm';

const InputWithForm = withForm(props => (
  <input
    type="text"
    value={props.inputValue}
    onChange={props.changeHandler}
    onSubmit={props.submitHandler}
  />
));

storiesOf('Organisms', module).add('withForm', () => (
  <StoryWrapper>
    <InputWithForm />
  </StoryWrapper>
));
