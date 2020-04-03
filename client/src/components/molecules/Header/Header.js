import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../atoms/Heading';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import shadow from '../../../styles/shadow';
import HeaderNav from './HeaderNav';
import Button from '../../atoms/Button';

const BackButton = styled(Button)`
  padding: 0;
  margin-left: -10px;
  min-height: auto;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  padding: 16px;
  justify-content: flex-end;
  background-color: white;
  ${shadow[1]}
`;

const HeaderMessage = styled(Text)`
  margin: 0;
`;

const Title = styled(Heading)`
  margin-top: 4px;
  color: ${props => props.theme.heading[props.color][1]};
`;

const HeaderContent = styled.div`
  justify-content: flex-end;
  max-height: 130px;
`;

const Separator = styled.div`
  margin: 16px 0 16px 0;
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.background.lighter};
`;

const Header = ({ message, title, themeColor, navItems, backButton }) => (
  <HeaderContainer>
    <HeaderContent>
      {backButton && (
        <BackButton z="0" onClick={backButton.onClick}>
          <Icon name="arrow-back" />
          <Text>{backButton.text}</Text>
        </BackButton>
      )}
      {message && <HeaderMessage>{message}</HeaderMessage>}
      {title && (
        <Title type="h2" color={themeColor}>
          {title}
        </Title>
      )}
    </HeaderContent>
    {navItems && (
      <div>
        <Separator />
        <HeaderNav themeColor={themeColor} navItems={navItems} />
      </div>
    )}
  </HeaderContainer>
);

Header.propTypes = {
  themeColor: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
  navItems: PropTypes.array,
  backButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

Header.defaultProps = {
  themeColor: 'purple',
  backButton: undefined,
};

export default Header;
