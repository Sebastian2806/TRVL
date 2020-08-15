import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import LakeBled from '../assets/img/Lake Bled.jpg';
import Cards from '../components/organisms/Cards';

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
  background: url(${({ img }) => `"${img}"`}) no-repeat center;
  background-size: cover;
`;

const Home = () => {
  return (
    <HeaderTemplate>
      <StyledBackground img={LakeBled} />
      <StyledFullWindow />
      <Cards />
    </HeaderTemplate>
  );
};

export default Home;
