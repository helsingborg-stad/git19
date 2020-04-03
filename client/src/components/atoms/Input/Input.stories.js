/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import Input from './Input';
// import withForm from '../organisms/withForm';

// TODO: implement withForm component
// const InputWithForm = withForm(props => (
//   <Input
//     value={props.inputValue}
//     onChangeText={props.changeHandler}
//     onSubmitEditing={props.submitHandler}
//     {...props}
//   />
// ));

export default {
  title: 'Input',
  component: Input,
};

// export const Default = () => (
//   <StoryWrapper>{/* <InputWithForm placeholder="Type something" /> */}</StoryWrapper>
// );

// export const Numeric = () => (
//   <StoryWrapper>
//     {/* <InputWithForm placeholder="Type some numbers" keyboardType="numeric" /> */}
//   </StoryWrapper>
// );

// export const PhonePad = () => (
//   <StoryWrapper>
//     {/* <InputWithForm placeholder="Type some number using phone pad" keyboardType="phone-pad" /> */}
//   </StoryWrapper>
// );

export const WithOutForm = () => (
  <StoryWrapper>
    <Input placeholder="Type something" />
  </StoryWrapper>
);
