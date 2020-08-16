import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
  const changeCurrentPlace = (current) => {
    let newCurrentPlace = current <= 0 ? places.length : current;
    if (current > places.length) newCurrentPlace = 1;
    setCurrentPlace(newCurrentPlace);
  };

  const activeCard = useCurrentPlace(currentPlace);
  const { id } = activeCard;

  const cardPlaces = [];
  cardPlaces.push(activeCard, ...places.slice(id), ...places.slice(0, id - 1));

  cardPlaces[0] = { ...cardPlaces[0], side: 'center' };
  cardPlaces[1] = { ...cardPlaces[1], side: 'right', secondary: true };
  cardPlaces[2] = { ...cardPlaces[2], side: 'right', tertiary: true };
  cardPlaces[3] = { ...cardPlaces[3], side: 'left', tertiary: true };
  cardPlaces[4] = { ...cardPlaces[4], side: 'left', secondary: true };

  const cardsElements = cardPlaces.map((place) => (
    <CSSTransition in key={place.name} timeout={200} classNames="card">
      <Card {...place} />
    </CSSTransition>
  ));

  return (
    <TransitionGroup component={StyledWrapper}>
      {cardsElements}
      <LeftArrow direction="prev" onClick={() => changeCurrentPlace(currentPlace - 1)} />
      <RightArrow direction="next" onClick={() => changeCurrentPlace(currentPlace + 1)} />
    </TransitionGroup>
  );
};

Cards.propTypes = {
  currentPlace: PropTypes.number.isRequired,
  setCurrentPlace: PropTypes.func.isRequired,
};

export default Cards;
