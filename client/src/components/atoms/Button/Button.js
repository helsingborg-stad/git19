/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

import { PropTypes } from 'prop-types';
import z from '../../../styles/shadow';

import Text from '../Text';
import Icon from '../Icon';
import colors from '../../../styles/colors';

const ButtonNew = ({
  children,
  className,
  value,
  onClick,
  style,
  color,
  block,
  rounded,
  pill,
  sharp,
  icon,
  z: elevation,
  size,
}) => {
  const childrenTotal = React.Children.count(children);

  let iconComponentsTotal = 0;
  let textComponentsTotal = 0;

  /** Override child components */
  const childrenToRender = React.Children.map(children, (child, index) => {
    // TODO: implement Icon component
    /** Icon */
    if (child.type === Icon) {
      iconComponentsTotal++;

      let ButtonComponent = ButtonIcon;

      if (childrenTotal > 1 && index > 0) {
        ButtonComponent = RightButtonIcon;
      }

      if (childrenTotal > 1 && index === 0) {
        ButtonComponent = LeftButtonIcon;
      }

      return React.createElement(ButtonComponent, {
        ...child.props,
        size: 32,
        buttonTheme: color,
      });
    }

    /** Text */
    if (child.type === Text) {
      textComponentsTotal++;
      return React.createElement(ButtonText, {
        ...child.props,
        buttonTheme: color,
        buttonSize: size,
      });
    }

    return child;
  });

  return (
    <ButtonWrapper>
      <ButtonBase
        className={className}
        block={block}
        onClick={onClick}
        buttonTheme={color}
        buttonSize={size}
        rounded={rounded}
        pill={pill}
        className={className}
        style={style}
        icon={iconComponentsTotal === 1 && childrenTotal === 1 ? true : icon}
        z={elevation}
        shrarp={sharp}
      >
        {childrenToRender || (value ? <ButtonText>{value}</ButtonText> : null)}
      </ButtonBase>
    </ButtonWrapper>
  );
};

ButtonNew.defaultProps = {
  color: PropTypes.oneOf([Object.keys(colors.button)]),
  rounded: PropTypes.bool,
  pill: PropTypes.bool,
  icon: PropTypes.bool,
  sharp: PropTypes.bool,
  z: 1,
  size: 'medium',
};

ButtonNew.defaultProps = {
  color: 'light',
  rounded: false,
  pill: false,
  icon: false,
  sharp: false,
  z: 1,
  size: 'medium',
};

/** Button styles */
const ButtonBase = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  min-height: 56px;

  border-radius: 12.5px;
  border-color: ${({ theme, buttonTheme }) => theme.button[buttonTheme].background};
  border-style: solid;

  padding: ${({ icon }) => (!icon ? '12px 20px' : '16px 16px')};
  min-width: ${({ icon }) => (!icon ? '124px' : 'auto')};
  background-color: ${({ theme, buttonTheme }) => theme.button[buttonTheme].background};

  ${({ rounded }) => rounded && CSS.buttonRounded}
  ${({ pill }) => pill && CSS.buttonPill}
  ${({ sharp }) => sharp && CSS.buttonSharp}
  ${({ block }) => block && CSS.buttonBlock}

  ${({ buttonSize }) => buttonSize === 'small' && CSS.buttonSmall}

  ${props => CSS.z[props.z]}
  shadow-color: ${({ theme, buttonTheme }) => theme.button[buttonTheme].shadow};
`;

/** Button modifiers */
const CSS = { z };

CSS.buttonRounded = css`
  border-radius: 17.5px;
`;

CSS.buttonPill = css`
  border-radius: 24.5px;
`;

CSS.buttonSharp = css`
  border-radius: 0px;
`;

CSS.buttonSmall = css`
  padding: 10px 12px;
  min-height: 36px;
  min-width: 74px;
`;

CSS.buttonBlock = css`
  width: 100%;
`;

/** Button child component overrides */
const ButtonText = styled(Text)`
  margin: 0;
  font-size: ${({ buttonSize }) => (buttonSize === 'small' ? '14px' : '16px')};
  color: ${({ theme, buttonTheme }) => theme.button[buttonTheme].text};
  ${({ buttonSize }) => buttonSize === 'small' && 'font-weight: bold;'};
`;

const ButtonIcon = styled(Icon)`
  color: ${props => (props.color ? props.color : props.theme.button[props.buttonTheme].icon)};
  font-size: 26px;
  height: 26px;
  width: 26px;
  line-height: 26px;
`;

const LeftButtonIcon = styled(ButtonIcon)`
  margin-right: 16px;
  ${props => (props.push ? 'margin-right: auto;' : null)}
`;

const RightButtonIcon = styled(ButtonIcon)`
    margin-left: 16px;
    ${props => (props.push ? 'margin-left: auto;' : null)}

    color: ${props => props.theme.button[props.buttonTheme].iconRight};
`;

/** Button utils */
const ButtonWrapper = styled.div`
  flex-direction: row;
`;

export default ButtonNew;
