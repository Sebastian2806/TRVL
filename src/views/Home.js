import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import * as Slider from '../components/organisms/Slider';
import { places } from '../util/places';

const StyledFullWindow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  /* backdrop-filter: blur(2px) opacity(70%); */
`;

const StyledWrapper = styled.main`
  width: 100%;
  height: calc(100vh);
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButtonsWrapper = styled.div`
  z-index: 9;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;

  @media (min-height: 650px) {
    height: 100px;
  }

  @media (min-width: 786px) {
    top: 50%;
    transform: translateY(-100%);
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const StyledBackground = styled(StyledFullWindow)`
  background: url(${({ img }) => `'${img}'`}) no-repeat center;
  background-size: cover;
`;

const Home = () => {
  // const img = useCurrentPlace(currentPlace).src.jpg;

  return (
    <HeaderTemplate>
      <StyledBackground img={`${places[2].src.jpg}`} />
      <StyledFullWindow />
      <StyledWrapper>
        <Slider.Wrapper>
          <Slider.CardItem cardNumber={0} />
          <Slider.CardItem cardNumber={1} />
          <Slider.CardItem cardNumber={2} />
          <Slider.CardItem cardNumber={3} />
          <Slider.CardItem cardNumber={4} />
          <StyledButtonsWrapper>
            <Slider.Button direction="prev" />
            <Slider.Button direction="next" />
          </StyledButtonsWrapper>
        </Slider.Wrapper>
      </StyledWrapper>
    </HeaderTemplate>
  );
};

export default Home;
