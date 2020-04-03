import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const SubmitButtonWrapper = styled.div`
  height: 56px;
`;

const SubmitButtonInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 90px;
`;

const SubmitButtonText = styled.span`
  color: rgba(41, 128, 185);
  fontweight: bold;
`;

const ChatSubmitButton = ({ submitHandler, submitText }) => (
  <SubmitButtonWrapper onClick={submitHandler}>
    <SubmitButtonInner>
      <SubmitButtonText>{submitText || 'Send'}</SubmitButtonText>
    </SubmitButtonInner>
  </SubmitButtonWrapper>
);

ChatSubmitButton.propTypes = {
  submitHandler: PropTypes.func,
  submitText: PropTypes.string,
};

ChatSubmitButton.defaultProps = {
  submitHandler: undefined,
  submitText: undefined,
};

export default ChatSubmitButton;
