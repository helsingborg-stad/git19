import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';
import Heading from '../Heading';
import Button from '../Button';
import Icon from '../Icon';
import shadow from '../../../styles/shadow';

const CSS = {};

CSS.left = css`
  align-self: flex-start;
  border-bottom-left-radius: 4px;
  margin-right: 96px;
`;
CSS.right = css`
  align-self: flex-end;
  border-bottom-right-radius: 4px;
  margin-left: 96px;
`;

const Bubble = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 14px 18px 12px 18px;
  background-color: gray;
  border-radius: 17.5px;
  align-self: flex-start;
  background-color: ${props => props.theme.chatBubble[props.colorTheme].background};

  ${props => (props.alignment && CSS[props.alignment] ? CSS[props.alignment] : null)}
  ${props => shadow[props.z]}
`;

const BubbleHeading = styled(Heading)`
  color: ${props => props.theme.chatBubble[props.colorTheme].text};
`;

const BubbleText = styled(Text)`
  color: ${props => props.theme.chatBubble[props.colorTheme].text};
  font-size: 16px;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const BubbleContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
`;

const Aside = styled.div`
  align-self: flex-start;
  flex-basis: 42px;
  border-left-width: 1px;
  border-left-color: ${props => props.theme.border.default};
  align-items: flex-end;
  margin-left: 16px;
  padding: 0;
`;

// TODO: Port Button Component.

const IconButton = styled(Button)`
  padding: 0;
  padding-top: 0;
  padding-bottom: 0;
  min-height: auto;
`;

const ChatBubble = props => {
  const {
    className,
    content,
    modifiers,
    style,
    iconRight,
    onClickIconRight,
    theme,
    z,
    ...other
  } = props;

  const avalibleColorModifiers = ['automated', 'human', 'user'];
  let colorTheme = modifiers
    ? modifiers.find(modifier => avalibleColorModifiers.includes(modifier))
    : undefined;
  colorTheme = colorTheme || 'user'; // Default theme

  const alignment = colorTheme === 'user' ? 'right' : 'left';

  /** Override child components */
  const children = React.Children.map(other.children, (child, index) => {
    /** Heading */
    if (child.type === Heading) {
      return React.createElement(BubbleHeading, {
        ...child.props,
        colorTheme,
      });
    }

    /** Text */
    if (child.type === Text) {
      return React.createElement(BubbleText, {
        ...child.props,
        colorTheme,
      });
    }

    return child;
  });

  return (
    <Bubble className={className} alignment={alignment} colorTheme={colorTheme} style={style} z={z}>
      <ContentWrapper>
        <BubbleContent>
          {children ||
            (content ? <BubbleText colorTheme={colorTheme}>{content}</BubbleText> : null)}
        </BubbleContent>

        {iconRight && onClickIconRight ? (
          <Aside>
            <IconButton onClick={onClickIconRight} color="white" z={0}>
              <Icon color={theme.chatBubble[colorTheme].asideIcon} name={iconRight} />
            </IconButton>
          </Aside>
        ) : null}
      </ContentWrapper>
    </Bubble>
  );
};

ChatBubble.propTypes = {
  className: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.oneOf(['automated', 'human', 'user'])),
  content: PropTypes.string,
  onClickIconRight: PropTypes.func,
  iconRight: PropTypes.string,
  z: PropTypes.number,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({ chatBubble: PropTypes.object }),
};

ChatBubble.defaultProps = {
  className: '',
  modifiers: ['user'],
  iconRight: 'help-outline',
  z: 1,
  theme: {
    chatBubble: {
      user: {
        background: '#A84C98',
        text: '#fff',
        asideIcon: '#fff',
      },
      human: {
        background: '#fff',
        text: '#707070',
        asideIcon: '#3D3D3D',
      },
      automated: {
        background: '#fff',
        text: '#707070',
        asideIcon: '#3D3D3D',
      },
    },
  },
};

export default withTheme(ChatBubble);
