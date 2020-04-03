/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import ScreenWrapper from './ScreenWrapper';

import 'normalize.css';
import 'typeface-roboto';
import '../../index.css';

const StoryWrapper = props => (
  <EnhancedSafeAreaView>
    <ModifiedScreenWrapper className={props.className}>
      {props.kind ? <StoryHeading>{`${props.kind} / ${props.name}`}</StoryHeading> : null}
      {props.children}
    </ModifiedScreenWrapper>
  </EnhancedSafeAreaView>
);

const StoryHeading = styled.h2`
  margin-bottom: 16px;
  margin-top: 16px;
`;

const EnhancedSafeAreaView = styled.div`
  height: 100%;
  margin-bottom: 18px;
`;

const ModifiedScreenWrapper = styled(ScreenWrapper)`
  justify-content: flex-start;
`;

export default StoryWrapper;
