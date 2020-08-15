import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import Cards from '../components/organisms/Cards';
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
  const [currentPlace] = useState(3);

  const img = places.find((el) => el.id === currentPlace).src.jpg;

  return (
    <HeaderTemplate>
      <StyledBackground img={`${img}`} />
      <StyledFullWindow />
      <Cards currentPlace={currentPlace} />
    </HeaderTemplate>
  );
};

export default Home;
