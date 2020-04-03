import React from 'react';
import ListItem from './ListItem';
import StoryWrapper from '../StoryWrapper';
import iconRings from '../../../assets/icon-rings/icon-rings-32x32.png';

export default {
  component: ListItem,
  title: 'ListItem',
};

export const Text = () => (
  <StoryWrapper>
    <ListItem text="List Item Text" />
  </StoryWrapper>
);
export const Title = () => (
  <StoryWrapper>
    <ListItem title="List Item Title" text="List Item Text" />
  </StoryWrapper>
);
export const Highlighted = () => (
  <StoryWrapper>
    <ListItem highlighted imageSrc={iconRings} text="List Item Title" title="List Item Text" />
  </StoryWrapper>
);

export const Icon = () => (
  <StoryWrapper>
    <ListItem iconName="check" text="List Item Title" title="List Item Text" />
  </StoryWrapper>
);

export const Image = () => (
  <StoryWrapper>
    <ListItem imageSrc={iconRings} text="List Item Title" title="List Item Text" />
  </StoryWrapper>
);

export const Colors = () => (
  <StoryWrapper>
    <ListItem highlighted imageSrc={iconRings} text="List Item Title" title="List Item Text" />
    <ListItem
      highlighted
      color="blue"
      imageSrc={iconRings}
      text="List Item Title"
      title="List Item Text"
    />
    <ListItem
      highlighted
      color="purple"
      imageSrc={iconRings}
      text="List Item Title"
      title="List Item Text"
    />
    <ListItem
      highlighted
      color="red"
      imageSrc={iconRings}
      text="List Item Title"
      title="List Item Text"
    />
    <ListItem
      highlighted
      color="green"
      imageSrc={iconRings}
      text="List Item Title"
      title="List Item Text"
    />
  </StoryWrapper>
);
