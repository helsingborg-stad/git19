/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { ChatBubble } from '../../atoms';
import EventHandler, { EVENT_USER_MESSAGE } from '../../../helpers/EventHandler';
import WatsonAgent from './WatsonAgent';

const DarthVaderAgent = props => {
  useEffect(() => {
    const { chat } = props;

    chat.addMessages({
      Component: ChatBubble,
      componentProps: {
        content: 'Enter Watson to turn to the dark side.',
        modifiers: ['automated'],
      },
    });

    const handleHumanChatMessage = message => {
      let chatMessage;

      if (message.search('Watson') !== -1) {
        chat.switchAgent(WatsonAgent);
        chatMessage = 'Switching to the dark side.';
      }

      chat.addMessages({
        Component: ChatBubble,
        componentProps: {
          content: `Darth Vader says: ${chatMessage}`,
          modifiers: ['automated'],
        },
      });
    };

    EventHandler.subscribe(EVENT_USER_MESSAGE, message => handleHumanChatMessage(message));

    return () => {
      EventHandler.unSubscribe(EVENT_USER_MESSAGE);
    };
  }, []);

  return null;
};

export default DarthVaderAgent;
