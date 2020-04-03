/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withTheme } from 'styled-components';
import { includePropetiesWithKey, excludePropetiesWithKey } from '../../helpers/Objects';
import ChatForm from './ChatForm';
// import { Keyboard, TextInput, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Input } from '../atoms';

const InputForm = props => {
  const chatFormProps = ['isFocused', 'submitHandler', 'changeHandler', 'inputValue', 'submitText'];
  return (
    <ChatForm {...includePropetiesWithKey(props, chatFormProps)}>
      <Input
        placeholderTextColor={props.theme.input.placeholder}
        {...excludePropetiesWithKey(props, chatFormProps)}
      />
    </ChatForm>
  );
};

export default withTheme(InputForm);
