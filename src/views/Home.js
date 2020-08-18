import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import Slider from '../components/organisms/Slider';
// import { useCurrentPlace } from '../hooks/useCurrentPlace';
import { places } from '../util/places';

const StyledFullWindow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  backdrop-filter: blur(2px) opacity(70%);
`;

const StyledBackground = styled(StyledFullWindow)`
  background: url(${({ img }) => `'${img}'`}) no-repeat center;
  background-size: cover;
`;

const Home = () => {
  const [cardsDirection, setCardsDirection] = useState([0, 1, 2, 3, 4]);

  // const img = useCurrentPlace(currentPlace).src.jpg;

  return (
    <HeaderTemplate>
      <StyledBackground img={`${places[2].src.jpg}`} />
      <StyledFullWindow />
      <Slider cardsDirection={cardsDirection} setCardsDirection={setCardsDirection} />
      {/* <Cards currentPlace={currentPlace} setCurrentPlace={setCurrentPlace} /> */}
    </HeaderTemplate>
  );
};

export default Home;
