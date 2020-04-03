import styled from 'styled-components';

const Text = styled.p`
  color: ${props => props.theme.text.default};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  font-family: Roboto;
  ${({ small }) => small && `font-size: 12px;`}
  ${({ strong }) => strong && `font-weight: 900;`}
  flex-shrink: 1;
`;

export default Text;
