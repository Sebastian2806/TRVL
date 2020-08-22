import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../molecules/Card';
import Arrow from '../atoms/Arrow/Arrow';
import { places } from '../../util/places';
import SliderContext from '../../context/SliderContext';

const StyledWrapper = styled.div`
  position: relative;
  width: 1400px;
  height: 550px;
  overflow: hidden;
  perspective: 2000px;
`;

const CardItem = ({ cardNumber }) => {
  const { cardsDirection } = useContext(SliderContext);
  const cardPlace = places.find((el) => el.id === cardNumber);
  const pos = cardsDirection.findIndex((card) => card === cardPlace.id);

  return <Card {...cardPlace} pos={pos} />;
};

const Button = ({ direction }) => {
  const { changeCardsDirection } = useContext(SliderContext);
  return <Arrow direction={direction} onClick={() => changeCardsDirection(direction)} />;
};

const Wrapper = ({ children }) => {
  const [cardsDirection, setCardsDirection] = useState([0, 1, 2, 3, 4]);

  const changeCardsDirection = (direction) => {
    const cardsDirectionCopy = cardsDirection;
    const centerElements = cardsDirectionCopy.splice(1, 3);
    if (direction === 'prev') setCardsDirection([...centerElements, ...cardsDirectionCopy.reverse()]);
    else setCardsDirection([...cardsDirectionCopy.reverse(), ...centerElements]);
  };

  return (
    <SliderContext.Provider value={{ cardsDirection, changeCardsDirection }}>
      <StyledWrapper>{children}</StyledWrapper>
    </SliderContext.Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.propTypes = {
  direction: PropTypes.string.isRequired,
};

CardItem.propTypes = {
  cardNumber: PropTypes.number.isRequired,
};

export { Wrapper, Button, CardItem };
