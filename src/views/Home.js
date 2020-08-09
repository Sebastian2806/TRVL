import React from 'react';
import styled from 'styled-components';
import HeaderTemplate from '../components/templates/HeaderTemplate';
import LakeBled from '../assets/img/Lake Bled.jpg';

const Home = () => {
  const StyledBackground = styled.div`
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background: url(${({ img }) => img}) no-repeat;
  `;

  return (
    <HeaderTemplate>
      <StyledBackground img={LakeBled} />
    </HeaderTemplate>
  );
};

export default Home;
