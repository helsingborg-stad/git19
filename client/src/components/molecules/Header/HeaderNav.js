import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/';
import Text from '../../atoms/Text';

const HeaderNav = ({ themeColor, navItems }) => (
  <Nav>
    {navItems.map(item => (
      <NavItem key={item.id}>
        <NavTitleWrapper>
          <NavTitle active={item.active}>{item.title}</NavTitle>
        </NavTitleWrapper>
        <ActiveItemBar color={themeColor} active={item.active} />
      </NavItem>
    ))}
  </Nav>
);

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const NavItem = styled.div`
  flex: 1;
  height: 40px;
`;

const NavTitleWrapper = styled.div`
  flex: 1;
`;

const NavTitle = styled(Text)`
  margin: 0;
  margin-bottom: 6px;
  color: ${props => props.theme.background.gray};
  ${({ active }) =>
    active &&
    `
      color: black;
    `}
`;

const ActiveItemBar = styled.div`
  height: 2px;
  width: 25px;
  background-color: ${props =>
    props.active ? props.theme.heading[props.color][2] : 'transparent'};
`;

HeaderNav.propTypes = {
  themeColor: PropTypes.string,
  navItems: PropTypes.array,
};

HeaderNav.defaultProps = {
  themeColor: 'purple',
};

export default HeaderNav;
