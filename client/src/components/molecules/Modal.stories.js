import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import Modal from './Modal';
import StoryWrapper from './StoryWrapper';

export default {
  component: Modal,
  title: 'Modal',
};

const Flex = styled.div`
  padding: 8px;
`;

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: {
        visible: false,
        heading: '',
        content: '',
      },
    };
  }

  changeModal(visible, heading = '', content = '') {
    this.setState({
      modal: {
        visible,
        heading,
        content,
      },
    });
  }

  render() {
    const { modal } = this.state;
    const { visible, heading, content } = modal;

    return (
      <Flex>
        <Modal
          color="purple"
          visible={visible}
          heading={heading}
          content={content}
          changeModal={visible => this.changeModal(visible)}
        />

        <Button
          color="purple"
          onClick={() =>
            this.changeModal(
              !visible,
              'Modal one',
              'Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
            )
          }
        >
          <Text>Show modal</Text>
        </Button>
      </Flex>
    );
  }
}

export const Default = () => (
  <StoryWrapper>
    <ModalExample />
  </StoryWrapper>
);
