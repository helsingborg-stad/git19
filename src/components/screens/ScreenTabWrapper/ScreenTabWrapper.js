import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { RenderRoutes } from '../../../routes';
import TabBarNavigation from '../../molecules/TabBarNavigation';

const ScreenTabWrapperTabBarRoutes = styled.div`
  flex: 1;
`;

const ScreenTabWrapper = ({ routes, className, history, location, ...rest }) => {
  const tabItems = routes.map(route => ({
    tabIcon: route.tab.icon,
    tabText: route.tab.text,
    onClick: () => history.push(route.path),
    tabActive: location.pathname === route.path,
  }));

  return (
    <>
      <ScreenTabWrapperTabBarRoutes className={className}>
        <RenderRoutes routes={routes} />
      </ScreenTabWrapperTabBarRoutes>
      <TabBarNavigation className={className} tabItems={tabItems} />
    </>
  );
};

ScreenTabWrapper.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  className: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

ScreenTabWrapper.defaultProps = {
  className: '',
};

export default ScreenTabWrapper;
