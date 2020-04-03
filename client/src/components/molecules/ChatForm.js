/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
// import { Keyboard, TextInput, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import styled from 'styled-components';
import { Button, Icon, Text, Input } from '../atoms';

const ChatFormWrapper = styled.div``;
const ChatFormFooter = styled.div``;
const ChatFormBody = styled.div`
  flex-direction: row;
`;
const ChatFormButton = styled(Button)`
  min-width: auto;
  padding: 0px 8px 0px 0px;
  background: transparent;
`;

const ChatFormButtonIcon = styled(Icon)`
  color: ${props => props.theme.icon.light};
`;

const UnStyledInput = styled(Input)`
  flex: 1;
  padding: 8px;
  border: 0;
`;

const InputStyledView = styled.div`
  ${Input.css}
  padding: 8px;
  flex-direction: row;
  flex: 1;
  display: flex;
`;

const ChatForm = props => {
  const {
    style,
    renderFooter,
    submitHandler,
    changeHandler,
    inputValue,
    isFocused,
    keyboardType,
  } = props;
  const formProps = { submitHandler, changeHandler, inputValue };

  const children = props.children
    ? React.Children.map(props.children, (child, index) => {
        if (!child.type) {
          return child;
        }

        if (child.type === Input) {
          return React.createElement(UnStyledInput, {
            onChange: changeHandler,
            value: inputValue,
            onSubmit: submitHandler,
            keyboardType,
            ...child.props,
          });
        }

        return React.createElement(child.type, { form: { ...formProps }, ...child.props });
      })
    : false;

  return (
    <ChatFormWrapper>
      <ChatFormBody style={style}>
        {isFocused && (
          <ChatFormButton /* onClick={Keyboard.dismiss} */ z={0}>
            <ChatFormButtonIcon name="keyboard-hide" />
          </ChatFormButton>
        )}

        <InputStyledView>
          {children || (
            <UnStyledInput
              value={inputValue}
              onChange={changeHandler}
              onSubmit={submitHandler}
              placeholder="Skriv något... "
              keyboardType={keyboardType || 'default'}
              focus={!!isFocused}
            />
          )}

          <Button color="purpleLight" size="small" onClick={submitHandler} z={0}>
            {props.submitText ? <Text>{props.submitText}</Text> : <Text>Skicka</Text>}
          </Button>
        </InputStyledView>
      </ChatFormBody>

      {renderFooter ? <ChatFormFooter>{renderFooter()}</ChatFormFooter> : null}
    </ChatFormWrapper>
  );
};

export default ChatForm;
