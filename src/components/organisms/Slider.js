import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../molecules/Card';
import Arrow from '../atoms/Arrow/Arrow';
import { places } from '../../util/places';
import SliderContext from '../../context/SliderContext';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  height: 350px;
  overflow: hidden;
  perspective: 2000px;
  margin-top: 60px;

  @media (min-height: 500px) {
    height: 450px;
  }

  @media (min-height: 650px) {
    height: 600px;
  }
`;

const CardItem = ({ cardNumber }) => {
  const { cardsDirection } = useContext(SliderContext);
  const cardPlace = places.find((el) => el.id === cardNumber);
  const pos = cardsDirection.findIndex((card) => card === cardPlace.id);

  return <Card {...cardPlace} pos={pos} />;
};

const Button = ({ direction }) => {
  const { changeCardsDirection, disabled } = useContext(SliderContext);
  return <Arrow disabled={disabled} direction={direction} onClick={() => changeCardsDirection(direction)} />;
};

const Wrapper = ({ children, setBackground }) => {
  const [cardsDirection, setCardsDirection] = useState([0, 1, 2, 3, 4]);
  const [disabled, setDisabled] = useState(false);

  const changeDisabled = () => {
    setDisabled(true);
    const time = setTimeout(() => {
      setDisabled(false);
      clearTimeout(time);
    }, 1600);
  };

  const changeCardsDirection = (direction) => {
    changeDisabled();
    let cardsArr = [];
    const cardsDirectionCopy = [...cardsDirection];
    const centerElements = cardsDirectionCopy.splice(1, 3);
    if (direction === 'prev') {
      cardsArr = [...centerElements, ...cardsDirectionCopy.reverse()];
      setCardsDirection(cardsArr);
    } else if (direction === 'next') {
      cardsArr = [...cardsDirectionCopy.reverse(), ...centerElements];
      setCardsDirection(cardsArr);
    }
    setBackground(cardsArr[2]);
  };

  return (
    <SliderContext.Provider value={{ cardsDirection, changeCardsDirection, disabled }}>
      <StyledWrapper>{children}</StyledWrapper>
    </SliderContext.Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  setBackground: PropTypes.func.isRequired,
};

Button.propTypes = {
  direction: PropTypes.string.isRequired,
};

CardItem.propTypes = {
  cardNumber: PropTypes.number.isRequired,
};

export { Wrapper, Button, CardItem };
