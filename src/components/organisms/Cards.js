import React from 'react';
import styled from 'styled-components';
import Card from '../molecules/Card';
import Arrow from '../atoms/Arrow/Arrow';
// import { places } from '../../util/places';

const StyledWrapper = styled.main`
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledArrow = styled(Arrow)`
  position: absolute;
  z-index: 20;
  top: calc(100% / 2 + 40px);
`;

const LeftArrow = styled(StyledArrow)`
  left: -10px;
`;

const RightArrow = styled(StyledArrow)`
  right: -10px;
`;

const CardsTemplate = () => {
  return (
    <StyledWrapper>
      <Card side="left" tertiary />
      <Card side="left" secondary />
      <Card current />
      <Card side="right" secondary />
      <Card side="right" tertiary />
      <LeftArrow direction="prev" />
      <RightArrow direction="next" />
    </StyledWrapper>
  );
};

export default CardsTemplate;
