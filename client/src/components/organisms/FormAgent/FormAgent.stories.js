import React, { Component } from 'react';
// import { storiesOf } from 'storybook';

import StoryWrapper from '../../molecules/StoryWrapper';

import Chat from '../Chat';
import FormAgent from '.';

// import EventHandler, { EVENT_USER_MESSAGE } from '../../../helpers/EventHandler';

// import ChatBubble from '../../atoms/ChatBubble';
// import { getFormTemplate } from '../../../services/ChatFormService';

// import { renameMatchedKeysInObject, excludePropetiesWithKey } from '../../../helpers/Objects';
// import FormAgentExperimental from './FormAgentExperimental';

// class FormAgentInitiator extends Component {
//   componentDidMount() {
//     const { chat } = this.props;

//     chat.addMessages({
//       Component: ChatBubble,
//       componentProps: {
//         content: 'Hej! Vill du prova FormAgent?',
//         modifiers: ['automated'],
//       },
//     });

//     chat.switchInput({
//       type: 'radio',
//       options: [
//         {
//           value: 'Ja, starta FormAgent nu!',
//         },
//       ],
//     });

//     EventHandler.subscribe(EVENT_USER_MESSAGE, message => this.handleMessage(message));
//   }

//   componentWillUnmount() {
//     EventHandler.unSubscribe(EVENT_USER_MESSAGE);
//   }

//   handleMessage = message => {
//     const { chat } = this.props;
//     chat.switchAgent(props => <FormAgent {...props} formId={1} />);
//   };

//   render() {
//     return null;
//   }
// }

// storiesOf('Chat', module).add('Form agent', () => (
//   <StoryWrapper>
//     <Chat ChatAgent={FormAgent} />
//   </StoryWrapper>
// ));
// .add('Form agent with data from request', () => (
//     <StoryWrapper>
//         <Chat ChatAgent={FormAgentInitiatorWithRequest} />
//     </StoryWrapper>
// ))
// .add('Experimental form agent', () => (
//     <StoryWrapper>
//         <Chat ChatAgent={FormAgentExperimentalInitiator} />
//     </StoryWrapper>
// ));

export default {
  title: 'Form agent',
  component: FormAgent,
};

export const Default = props => (
  <StoryWrapper>
    <Chat ChatAgent={FormAgent} />
  </StoryWrapper>
);
