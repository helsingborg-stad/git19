import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import styled from 'styled-components';
import ImageEasy from '../../../assets/slides/illu_001.png';
import ImageAccessible from '../../../assets/slides/illu_002.png';
import ImagePersonal from '../../../assets/slides/illu_003.png';
import HbgLogo from '../../../assets/slides/stadsvapen.png';
import StorageService, { SHOW_SPLASH_SCREEN } from '../../../services/StorageService';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import ScreenWrapper from '../../molecules/ScreenWrapper';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  background: #f5f5f5;
`;

const Swiper = styled(SwipeableViews)`
  height: 100%;
`;

const SwipeButton = styled(Button)`
  background: transparent;
  border: none;
  padding-right: 0px;
`;

const LoginButton = styled(Button)`
  border-color: #d35098;
  background: #d35098;
  color: #fff;
`;

const Slide = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`;

const TopBar = styled.div`
  display: grid;
  justify-content: end;
  align-content: center;
`;

const Link = styled(Button)`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: 14px;
  color: #707070;
`;

const ImageContainer = styled.div`
  padding: 12px 0;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const SlideContent = styled.div`
  padding: 16px 32px;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 110px;
  height: auto;
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
`;

const Navigation = styled.div`
  padding: 8px 24px;
  display: grid;
  grid-template-columns: 120px auto;
  align-content: center;
  justify-content: space-between;
`;

const DotsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: repeat(4, auto);
`;

const Dot = styled.div`
  border: 2px solid #610839;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const ActiveDot = styled.div`
  background: #610839;
  border: 2px solid #610839;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

const LoginButtonContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 16px;
  display: grid;
  justify-content: center;
`;

const SlideHeading = styled(Heading)`
  padding-bottom: 12px;
`;

const SlideText = styled(Text)`
  font-size: 16px;
`;

/**
 * Splash screen that shall be displayed during first app initiation or after an app update.
 * TODO: Cannot run this component in Storybook because 'react-swipeable-views'
 * uses deprecated life cycle methods.
 */
export default function SplashScreen(props) {
  const [swipeIndex, setSwipeIndex] = useState(0);

  /**
   * Set state disable for splash screen.
   */
  const disableSplash = () => {
    const { history } = props;

    try {
      StorageService.saveData(SHOW_SPLASH_SCREEN, false);
    } catch (error) {
      console.log('Disable splash error: ', error);
    }

    history.push('/login');
  };

  /**
   * Navigate to Login if splash screen disabled.
   */
  const showSplash = async () => {
    try {
      const showSplashScreen = await StorageService.getData(SHOW_SPLASH_SCREEN);
      if (showSplashScreen === false) {
        disableSplash();
      }
    } catch (error) {
      console.log('Get splash value error: ', error);
    }
  };

  useEffect(() => {}, [showSplash()]);

  const SlideWelcome = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <Logo src={HbgLogo} alt="Helsingborgs stad" />
      </ImageContainer>
      <SlideContent>
        <Heading type="h2">
          Mitt <br />
          Helsingborg
        </Heading>
        <Heading type="h3">Välkommen! </Heading>
      </SlideContent>
    </Slide>
  );

  const SlideEasy = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <SlideImage src={ImageEasy} alt="Easy" />
      </ImageContainer>
      <SlideContent>
        <SlideHeading type="h3">Enkelt</SlideHeading>
        <SlideText>
          Mitt Helsingborg är appen där du enkelt får tillgång till tjänster och information från
          kommunen.
        </SlideText>
      </SlideContent>
    </Slide>
  );

  const SlideAccessible = () => (
    <Slide>
      <TopBar>
        <Link onClick={() => disableSplash()} size="small" z={0}>
          Hoppa över
        </Link>
      </TopBar>
      <ImageContainer>
        <SlideImage src={ImageAccessible} alt="Accessible" />
      </ImageContainer>
      <SlideContent>
        <SlideHeading type="h3">Nära</SlideHeading>
        <SlideText>
          Du kan följa och hantera dina ärenden, få personlig service eller bli tipsad om saker som
          händer nära dig.
        </SlideText>
      </SlideContent>
    </Slide>
  );

  const SlidePersonal = () => (
    <Slide>
      <TopBar />
      <ImageContainer>
        <SlideImage src={ImagePersonal} alt="Personal" />
      </ImageContainer>
      <SlideContent>
        <SlideHeading type="h3">Personligt</SlideHeading>
        <SlideText>
          Inloggad ger mer. Som inloggad får du en personlig upplevelse anpassad för dig. <br />
          Allt samlat i mobilen.
        </SlideText>
        <LoginButtonContainer>
          <LoginButton color="purple" z={3} onClick={() => disableSplash()}>
            <Text>Logga in med Mobilt BankID</Text>
          </LoginButton>
        </LoginButtonContainer>
      </SlideContent>
    </Slide>
  );

  /**
   * Render pagination dots
   */
  const renderDots = () => {
    const dots = [];
    for (let index = 0; index < 4; index++) {
      dots.push(index === swipeIndex ? <ActiveDot key={index} /> : <Dot key={index} />);
    }
    return dots;
  };

  return (
    <ScreenWrapper>
      <Container>
        <Swiper
          resistance
          enableMouseEvents
          index={swipeIndex}
          onChangeIndex={i => setSwipeIndex(i)}
        >
          <SlideWelcome />
          <SlideEasy />
          <SlideAccessible />
          <SlidePersonal />
        </Swiper>
        {swipeIndex < 3 && (
          <Navigation value={swipeIndex}>
            <DotsContainer>{renderDots()}</DotsContainer>
            <SwipeButton z={0} onClick={() => setSwipeIndex(swipeIndex + 1)}>
              <Text>{swipeIndex === 0 ? 'Kom igång' : 'Nästa'}</Text>
              <Icon size={16} name="chevron-right" color="purple" />
            </SwipeButton>
          </Navigation>
        )}
      </Container>
    </ScreenWrapper>
  );
}
