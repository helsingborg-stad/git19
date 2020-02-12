import React from 'react';
import GroupedList from './GroupedList';
import StoryWrapper from '../StoryWrapper';

export default {
  component: GroupedList,
  title: 'GroupedList',
};

const GroupedListData = [
  {
    heading: 'TISDAG 3 NOVEMBER',
    data: [
      {
        id: 'bd7a8bea',
        title: 'Highlighted with icon',
        text: 'Lorem ipsum',
        iconName: 'directions-bus',
        highlighted: true,
        color: 'red',
      },
    ],
  },
  {
    heading: 'FREDAG 10 NOVEMBER',
    data: [
      {
        id: '3ac68afc',
        title: 'With icon',
        text: 'Lorem ipsum',
        iconName: 'directions-bus',
      },
      {
        id: '58694a0f',
        title: 'Default',
        text: 'Lorem ipsum',
      },
    ],
  },
];

export const defaultGroupedList = () => (
  <StoryWrapper>
    <GroupedList heading="Grouped List" items={GroupedListData} />
  </StoryWrapper>
);
