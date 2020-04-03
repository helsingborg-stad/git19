import styled from 'styled-components';

const ChatFooter = styled.div`
  border-top: solid 1px ${props => props.theme.border.default};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  touch-action: none;
`;

export default ChatFooter;
