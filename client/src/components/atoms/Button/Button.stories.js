/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import StoryWrapper from '../../molecules/StoryWrapper';
import Button from './Button';
import { Text, Icon } from '..';

const CustomButton = styled(Button)`
  background-color: #afca05;
`;

const CustomButtonText = styled(Text)`
  color: #7b075e;
`;

const Flex = styled.div`
  padding: 8px;
`;

const FlexContainer = styled.div`
  flex: 1;
`;

const ButtonColors = injectProps => (
  <FlexContainer>
    <Flex>
      <Button color="purple" {...injectProps}>
        <Text>Purple</Text>
      </Button>
    </Flex>
    <Flex>
      <Button color="blue" {...injectProps}>
        <Text>Blue</Text>
      </Button>
    </Flex>
    <Flex>
      <Button color="light" {...injectProps}>
        <Text>Light</Text>
      </Button>
    </Flex>
    <Flex>
      <Button color="gray" {...injectProps}>
        <Text>Gray</Text>
      </Button>
    </Flex>
    <Flex>
      <Button color="dark" {...injectProps}>
        <Text>Dark</Text>
      </Button>
    </Flex>
  </FlexContainer>
);

export default {
  title: 'Button',
  component: Button,
};

export const Default = props => (
  <StoryWrapper {...props}>
    <ButtonColors />
  </StoryWrapper>
);

export const Small = props => (
  <StoryWrapper {...props}>
    <ButtonColors size="small" />
  </StoryWrapper>
);

export const Rounded = props => (
  <StoryWrapper {...props}>
    <ButtonColors rounded />
  </StoryWrapper>
);

export const Pill = props => (
  <StoryWrapper {...props}>
    <ButtonColors pill />
  </StoryWrapper>
);

export const Block = props => (
  <StoryWrapper {...props}>
    <ButtonColors block />
  </StoryWrapper>
);

export const CustomStyle = props => (
  <StoryWrapper {...props}>
    <FlexContainer>
      <Flex>
        <CustomButton color="light" block>
          <CustomButtonText>Button with custom styles</CustomButtonText>
        </CustomButton>
      </Flex>
    </FlexContainer>
  </StoryWrapper>
);

export const WithIcon = props => (
  <StoryWrapper {...props}>
    <FlexContainer>
      <Flex>
        <Button color="purple" z={5} rounded>
          <Icon name="arrow-upward" pill />
        </Button>
      </Flex>
      <Flex>
        <Button color="purple" pill>
          <Text>Icon right</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
      <Flex>
        <Button color="light" rounded>
          <Icon name="message" />
          <Text>Icon Left</Text>
        </Button>
      </Flex>
      <Flex>
        <Button color="blue" pill>
          <Icon name="message" />
          <Text>Skriv en fråga</Text>
        </Button>
      </Flex>
    </FlexContainer>
  </StoryWrapper>
);

export const Shadows = props => (
  <StoryWrapper {...props}>
    <FlexContainer>
      <Flex>
        <Button color="purple" z={4} rounded>
          <Text>z4</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
      <Flex>
        <Button color="purple" z={3} rounded>
          <Text>z3</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
      <Flex>
        <Button color="purple" z={2} rounded>
          <Text>z2</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
      <Flex>
        <Button color="purple" z={1} rounded>
          <Text>z1</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
      <Flex>
        <Button color="purple" z={0} rounded>
          <Text>z0</Text>
          <Icon name="arrow-upward" />
        </Button>
      </Flex>
    </FlexContainer>
  </StoryWrapper>
);
