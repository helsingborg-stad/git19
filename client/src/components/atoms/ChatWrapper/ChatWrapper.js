import styled from 'styled-components';

const ChatWrapper = styled.div`
  padding-bottom: 0;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  touch-action: none;
`;

ChatWrapper.defaultProps = {
  behavior: 'padding',
  enabled: true,
};

export default ChatWrapper;
