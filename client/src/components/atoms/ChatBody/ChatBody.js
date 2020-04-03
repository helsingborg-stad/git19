import styled from 'styled-components';

const ChatBody = styled.div`
  background-color: ${props => props.theme.chatBody.background};

  flex: 1 1 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;

  touch-action: auto;
`;

export default ChatBody;
