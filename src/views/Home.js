import React from 'react';
import styled from 'styled-components';
// import { gsap } from 'gsap';
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

  @media (min-width: 786px), (orientation: landscape) {
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

const StyledBlur = styled(StyledFullWindow)`
  background: ${({ theme }) => theme.dark};
  opacity: 0.8;
  z-index: -1;
`;

const Home = () => {
  // const img = useCurrentPlace(currentPlace).src.jpg;
  // const background = useRef(null);

  // const update = () => {
  //   // const currentBaseFre = background.current.getAttribute('baseFrequency');
  //   // console.log(currentBaseFre);
  //   // if (currentBaseFre > 0)
  //   background.current.setAttribute('baseFrequency', Math.random() * 0.1);
  // };

  // useEffect(() => {
  //   const throttledUpdate = _.throttle(update, 10, { trailing: false });

  //   gsap.to(background.current, 2, {
  //     onUpdate: () => {
  //       throttledUpdate();
  //     },
  //     onComplete: () => {
  //       background.current.setAttribute('baseFrequency', 0);
  //     },
  //     // baseFrequency: 1,
  //     // setAttribute('baseFrequency', bfStr);
  //   });
  // }, []);

  return (
    <HeaderTemplate>
      {/* <svg width="100vw" height="100vh">
        <defs>
          <filter id="turbulence" width="100%" height="100%">
            <feTurbulence
              ref={background}
              id="feturbulence"
              type="fractalNoise"
              numOctaves="3"
              seed="2"
              baseFrequency="0.1"
            />
            <feDisplacementMap xChannelSelector="G" yChannelSelector="G" scale="45" in="SourceGraphic" />
          </filter>
        </defs>

        <image x="0" y="0" href={`${places[2].src.jpg}`} filter="url(#turbulence)" />
      </svg> */}
      <StyledBackground img={`${places[2].src.jpg}`} />
      <StyledFullWindow />
      <StyledBlur />
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
