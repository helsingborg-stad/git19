/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable default-case */
import React from 'react';
import styled from 'styled-components';
// import { withNavigation } from 'react-navigation';

import FormAgent from '../organisms/FormAgent/FormAgent';
import { Button, Icon, Text, ChatBubble } from '../atoms';

const ActionButton = props => (
  <ModifiedButton onClick={props.clickAction} color="light" rounded block>
    <Icon color={props.iconColor} name={props.icon} />
    <Text>{props.label}</Text>
  </ModifiedButton>
);

const ButtonStackWrapper = styled.div``;

const ModifiedButton = styled(Button)`
  justify-content: flex-start;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const ButtonStack = props => {
  const { items, children } = props;

  /**
   * Adds different on click actions
   * @param {object} params
   *
   * TODO: Get click action from props
   */
  const onClick = params => {
    const { content, action } = params;
    const { type: actionType, value: actionValue, callback: actionCallback } = action;

    // Do custom actions
    if (actionType && actionValue) {
      switch (actionType) {
        case 'form':
          // Trigger form service
          props.chat.switchAgent(props => (
            <FormAgent
              {...props}
              formId={actionValue}
              callback={actionCallback ? props => actionCallback(props) : undefined}
            />
          ));
          break;
        case 'navigate':
          // Navigate to given route
          //   props.navigation.navigate(actionValue);
          return;
      }
    }

    const message = [
      {
        Component: ChatBubble,
        componentProps: {
          content,
          modifiers: ['user'],
        },
      },
    ];

    // Add message
    props.chat.addMessages(message);
  };

  const renderItem = (item, index) => {
    const { icon, value } = item;
    let { action } = item;
    action = typeof action === 'object' && action !== null ? action : {};

    const buttonProps = {
      label: value,
      iconColor: icon === 'check' ? '#50811B' : icon === 'close' ? '#AE0B05' : undefined,
      icon: icon || 'message',
      clickAction: () => onClick({ content: value, action }),
    };

    return <ActionButton {...buttonProps} key={`${item}-${index}`} />;
  };

  return <ButtonStackWrapper className={props.className}>{items.map(renderItem)}</ButtonStackWrapper>;
};

// export default withNavigation(ButtonStack);
export default ButtonStack;
