/* eslint-disable prefer-const */
/* eslint-disable react/jsx-props-no-spreading */
// import { TextInput } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';

const input = css`
  background-color: ${({ theme }) => theme.input.background};
  border: solid 1px ${({ theme }) => theme.input.border};
  border-radius: 17px;

  line-height: 1.5;

  ${({ center }) => center && 'text-align: center;'}
  font-size: 14px;
  padding: 14px;
  width: 100%;
  transition: all 0.2s ease-in;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.input.borderFocus};
  }
  -webkit-appearance: none;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  ::-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
  :-moz-placeholder {
    color: ${({ theme }) => theme.input.placeholder};
  }
`;

const StyledInput = styled.input`
  ${input}
`;

const Input = props => {
  console.log('TCL: props', props);
  const { maxLength, onChange, keyboardType } = props;
  const mutatedProps = { ...props };

  const patterns = {
    numeric: '[0-9]*',
  };

  // Set pattern (for keyboard UI)
  if (keyboardType && Object.keys(patterns).includes(keyboardType)) {
    mutatedProps.pattern = patterns[keyboardType];
  }

  const localOnChange = e => {
    // event mainupulation
    const event = e;

    // maxLength manipulation
    if (maxLength && event.target.value && event.target.value.length > maxLength) {
      event.target.value = event.target.value.substring(0, maxLength);
    }

    // trigger default onChange
    if (onChange && typeof onChange === 'function') {
      onChange(event);
    }
  };

  // Override onChange
  mutatedProps.onChange = localOnChange;

  return <StyledInput {...mutatedProps} />;
};

Input.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.object,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  theme: {
    input: {
      background: '#ffffff',
      border: '#e5e5e5',
      borderFocus: '#000',
    },
  },
};

Input.css = input;

export default Input;
