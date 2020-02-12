import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Icon from '../../atoms/Icon';

const TabBarNavigation = props => {
  const { tabItems, className } = props;
  console.log(props);
  return (
    <TopNav className={className}>
      <Tab>
        {tabItems.map(item => (
          <TabItem active={item.tabActive} onClick={item.onClick}>
            <Icon name={item.tabIcon} size={32} />
            <TabItemText>{item.tabText}</TabItemText>
          </TabItem>
        ))}
      </Tab>
    </TopNav>
  );
};

const TopNav = styled.div`
  overflow: hidden;
  background-color: #f8f8f8;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

const TabItem = styled.div`
  text-align: center;
  padding: 14px 16px;
  font-size: 10px;
  &:hover {
    background-color: pink;
    color: black;
  }

  ${props =>
    props.active &&
    css`
      background: pink;
    `}

  }
`;

const TabItemText = styled.p`
  user-select: none;
`;

TabBarNavigation.propTypes = {
  className: PropTypes.string,
  tabItems: PropTypes.arrayOf(PropTypes.object),
};

TabBarNavigation.defaultProps = {
  className: '',
  tabItems: [
    { tabIcon: 'message', tabText: 'Prata med oss' },
    { tabIcon: 'home', tabText: 'Mitt HBG' },
    { tabIcon: 'contacts', tabText: 'Profile' },
  ],
};

export default TabBarNavigation;
