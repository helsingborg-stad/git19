import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import Heading from './Heading';

export default {
  component: Heading,
  title: 'Heading',
};

export const headings = () => (
  <StoryWrapper>
    <Heading>Heading</Heading>
    <Heading type="h1">H1</Heading>
    <Heading type="h2">H2</Heading>
    <Heading type="h3">H3</Heading>
  </StoryWrapper>
);
