import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
// TODO: Import all components directly from ./atoms
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
// import { Image } from 'react-native';
import colors from '../../../styles/colors';

const FocusListItem = css`
  outline: none;
  transition: all 0.3s ease;
  &:active {
    opacity: 0.3;
  }
`;

const DefaultListItem = styled.div`
  border-bottom-width: 1;
  border-color: ${props => props.theme.background.lighter};
  ${FocusListItem}
`;

const HighlightedListItem = styled(Button)`
  padding: 0px;
  margin-bottom: 12px;
  background-color: white;
  border: none;
  ${FocusListItem}
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ListItemTitle = styled(Text)`
  color: ${props => props.theme.background.darkest};
  margin-bottom: 4px;
  margin-top: 0;
`;

const ListItemText = styled(Text)`
  margin: 0;
`;

const ListItemIconContainer = styled.div`
  width: 64px;
  background: ${props => props.background};
  border-top-left-radius: 12.5px;
  border-bottom-left-radius: 12.5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconFlex = styled.div``;

const ItemIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.55);
`;

const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 16px 0px 16px 8px;
  text-align: left;
`;

const ListItemChevron = styled(Icon)`
  color: #a3a3a3;
  margin-right: 16px;
`;
const ListItemChevronWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageIcon = styled.img`
  width: 32px;
  height: auto;
`;

const ListItem = props => {
  const { highlighted, iconName, title, className, text, color, onClick, imageSrc, theme } = props;
  console.log(color, Object.prototype.hasOwnProperty.call(theme.icon, color));
  const background =
    (highlighted &&
      color &&
      Object.prototype.hasOwnProperty.call(theme.icon, color) &&
      theme.icon[color][1]) ||
    (highlighted && !color && theme.icon.lightest) ||
    'transparent';
  console.log(background);
  const renderContent = () => (
    <Flex>
      {iconName && !imageSrc && (
        <ListItemIconContainer highlighted={highlighted} background={background}>
          <IconFlex>
            <ItemIcon name={iconName} color={color} />
          </IconFlex>
        </ListItemIconContainer>
      )}

      {imageSrc && (
        <ListItemIconContainer highlighted={highlighted} background={background}>
          <IconFlex>
            <ImageIcon src={imageSrc} resizeMode="contain" />
          </IconFlex>
        </ListItemIconContainer>
      )}

      <ListItemContent>
        {title && <ListItemTitle small> {title} </ListItemTitle>}
        {text && <ListItemText>{text}</ListItemText>}
      </ListItemContent>

      <ListItemChevronWrapper>
        <ListItemChevron name="chevron-right" />
      </ListItemChevronWrapper>
    </Flex>
  );

  if (highlighted) {
    return (
      <HighlightedListItem onClick={onClick} block>
        {renderContent()}
      </HighlightedListItem>
    );
  }

  return (
    <DefaultListItem underlayColor="transparent" onClick={onClick}>
      {renderContent()}
    </DefaultListItem>
  );
};

export default withTheme(ListItem);

ListItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'purple', 'red', 'green']),
  highlighted: PropTypes.bool,
  iconName: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  imageSrc: PropTypes.string,
  theme: PropTypes.shape({
    icon: PropTypes.shape({
      lightest: PropTypes.string,
    }),
  }),
};

ListItem.defaultProps = {
  className: '',
  color: 'default',
  highlighted: false,
  iconName: undefined,
  title: undefined,
  text: undefined,
  imageSrc: undefined,
  theme: {
    icon: {
      ...colors.icon,
    },
  },
};
