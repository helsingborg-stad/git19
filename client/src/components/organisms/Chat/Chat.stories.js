/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import StoryWrapper from '../../molecules/StoryWrapper';
import EventHandler, { EVENT_USER_MESSAGE } from '../../../helpers/EventHandler';
import { ChatBubble } from '../../atoms';

export default {
  title: 'Chat',
  component: Chat,
};

class ExampleAgent extends Component {
  componentDidMount() {
    console.log('ExampleAgent Mounted');
    const { chat } = this.props;
    const userTestMessage = 'Hello from user';
    console.log('TCL: ExampleAgent -> componentDidMount -> userTestMessage', userTestMessage);

    EventHandler.subscribe(EVENT_USER_MESSAGE, message => this.handleHumanChatMessage(message));

    chat.addMessages({
      Component: ChatBubble,
      componentProps: {
        content: userTestMessage,
        modifiers: ['user'],
      },
    });
  }

  componentWillUnmount(): void {
    EventHandler.unSubscribe(EVENT_USER_MESSAGE);
  }

  handleHumanChatMessage = message => {
    console.log('TCL: ExampleAgent -> handleHumanChatMessage -> message', message);

    const { chat } = this.props;

    // if (message.search('Watson') !== -1) {
    //   chat.switchAgent(WatsonAgent);

    //   message = 'Byter till agent Watson.';
    // }

    // chat.addMessages({
    //   Component: ChatBubble,
    //   componentProps: {
    //     content: `Papegoja säger: ${message}`,
    //     modifiers: ['automated'],
    //   },
    // });
  };

  render() {
    return null;
  }
}

export const Default = () => (
  <StoryWrapper>
    <Chat
      ChatAgent={ExampleAgent}
      inputComponents={{ type: 'text', placeholder: 'Skriv något...', autoFocus: false }}
    />
  </StoryWrapper>
);
