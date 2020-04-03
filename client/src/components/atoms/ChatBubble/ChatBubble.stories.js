import React from 'react';
import StoryWrapper from '../../molecules/StoryWrapper';
import ChatBubble from './ChatBubble';
import Text from '../Text';

export default {
  component: ChatBubble,
  title: 'ChatBubble',
};

export const content = () => (
  <StoryWrapper>
    <ChatBubble content="User modifier (using props.content instead of children)" />
  </StoryWrapper>
);

export const modifiers = () => (
  <StoryWrapper>
    <ChatBubble
      modifiers={['human']}
      content="Icon right example with callback"
      onClickIconRight={() => {
        console.info('clicked');
      }}
    />
    <ChatBubble modifiers={['human']}>
      <Text>Human modifier</Text>
    </ChatBubble>
  </StoryWrapper>
);

// TODO: Implement Atom Icon Component
// export const icon = () => (
//   <StoryWrapper>
//     <ChatBubble
//       modifiers={['human']}
//       content="Icon right example with callback"
//       onClickIconRight={() => {
//         console.info('clicked');
//       }}
//     />
//   </StoryWrapper>
// );
