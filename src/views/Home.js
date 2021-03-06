import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
// import _ from 'lodash';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import * as Slider from '../components/organisms/Slider';
import { places } from '../util/places';

const StyledFullWindow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
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

  @media (min-width: 786px), (orientation: landscape) {
    top: 50%;
    transform: translateY(-100%);
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const StyledBackground = styled(StyledFullWindow)`
  /* background: url(${({ img }) => `'${img}'`}) no-repeat center; */
  background: url(${() => `'${places[2].src.jpg}'`}) no-repeat center;
  background-size: cover;
`;

const StyledBlur = styled(StyledFullWindow)`
  background: ${({ theme }) => theme.dark};
  opacity: 0.8;
  backdrop-filter: blur(10px);
  z-index: -1;
`;

const Home = () => {
  const [background, setBackground] = useState(2);
  const bc = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(bc.current, {
      backgroundImage: `url(${places[background].src.jpg})`,
    });

    tl.from(bc.current, 1.5, {
      opacity: 0.2,
    });
  }, [background]);

  return (
    <HeaderTemplate>
      <StyledBackground ref={bc} />
      <StyledFullWindow />
      <StyledBlur />
      <StyledWrapper>
        <Slider.Wrapper setBackground={setBackground}>
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
