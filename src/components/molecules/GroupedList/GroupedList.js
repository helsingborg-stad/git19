import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading, Text } from '../../atoms';
import ListItem from '../ListItem';

const SectionList = ({ sections, renderItem, renderSectionHeader, ListHeaderComponent }) => (
  <div>
    {ListHeaderComponent}
    {sections.map(section => (
      <div>
        {renderSectionHeader(section)}
        <div>{section.data.map(item => renderItem(item))}</div>
      </div>
    ))}
  </div>
);

SectionList.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({})),
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
  ListHeaderComponent: PropTypes.node,
};

const GroupedList = ({ heading: listHeading, items, onClick }) => (
  <SectionList
    ListHeaderComponent={
      listHeading ? <GroupedListHeading type="h3">{listHeading}</GroupedListHeading> : null
    }
    renderSectionHeader={section => (
      <div>
        <SectionHeader small>{section.heading}</SectionHeader>
        {!(
          Object.hasOwnProperty.call(section.data[0], 'highlighted') &&
          section.data[0].highlighted === true
        ) && <Separator />}
      </div>
    )}
    sections={items}
    renderItem={item => <ListItem onClick={onClick} {...item} />}
  />
);

const GroupedListHeading = styled(Heading)`
  margin-left: 4px;
  margin-bottom: 8px;
`;

const SectionHeader = styled(Text)`
  margin: 16px;
  margin-left: 4px;
  color: ${props => props.theme.background.light};
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.background.lighter};
`;

GroupedList.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.array,
  onClick: PropTypes.func,
};

export default GroupedList;
