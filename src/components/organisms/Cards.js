import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../molecules/Card';
import Arrow from '../atoms/Arrow/Arrow';
import { places } from '../../util/places';
import { useCurrentPlace } from '../../hooks/useCurrentPlace';

const StyledWrapper = styled.main`
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 80px;
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

const Cards = ({ currentPlace, setCurrentPlace }) => {
  const activeCard = useCurrentPlace(currentPlace);
  const { id } = activeCard;

  const cardPlaces = [];
  cardPlaces.push(useCurrentPlace(currentPlace));
  cardPlaces.push(...places.slice(id));
  cardPlaces.push(...places.slice(0, id - 1));

  // const cards = cardPlaces.map((el,i) => {
  //   if(i > 0 && i <= 2) <Card side="left" />
  // })

  return (
    <StyledWrapper>
      <Card side="left" tertiary />
      <Card side="left" secondary />
      <Card current />
      <Card side="right" secondary />
      <Card side="right" tertiary />
      <LeftArrow direction="prev" onClick={() => setCurrentPlace(currentPlace - 1)} />
      <RightArrow direction="next" onClick={() => setCurrentPlace(currentPlace + 1)} />
    </StyledWrapper>
  );
};

Cards.propTypes = {
  currentPlace: PropTypes.number.isRequired,
  setCurrentPlace: PropTypes.func.isRequired,
};

export default Cards;
