import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../molecules/Card';
import Arrow from '../atoms/Arrow/Arrow';
import { places } from '../../util/places';
import {
  initCardsPosition,
  initCardsDescriptionPosition,
  changeCard,
  changeCardDescription,
} from '../../util/sliderAnimations';

const StyledWrapper = styled.main`
  margin: 0 auto;
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 80px;
`;

const StyledImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledArrow = styled(Arrow)`
  position: absolute;
  z-index: 100;
  top: calc(100% / 2 + 40px);
`;

const LeftArrow = styled(StyledArrow)`
  left: -10px;
`;

const RightArrow = styled(StyledArrow)`
  right: -10px;
`;

const Slider = ({ cardsDirection, setCardsDirection }) => {
  const slider = useRef(null);
  const images = useRef([]);

  const nextPlace = () => {
    const placesDirectionCopy = [...cardsDirection];
    const lastEl = placesDirectionCopy.pop();
    placesDirectionCopy.unshift(lastEl);
    setCardsDirection(placesDirectionCopy);
    changeCard(images.current[placesDirectionCopy[0]], -480, 0.6, 6, 0.85, { rotationY: 30 });
    changeCard(images.current[placesDirectionCopy[1]], -250, 0.8, 8, 0.9, { rotationY: 30 });
    changeCard(images.current[placesDirectionCopy[2]], 0, 1, 10, 1, { rotationY: 0 });
    changeCard(images.current[placesDirectionCopy[3]], 250, 0.8, 8, 0.9);
    changeCard(images.current[placesDirectionCopy[4]], 480, 0.6, 6, 0.85);

    changeCardDescription(
      [...images.current[cardsDirection[2]].children][0],
      [...images.current[cardsDirection[1]].children][0],
    );
  };

  const previousPlace = () => {
    const placesDirectionCopy = [...cardsDirection];
    const lastEl = placesDirectionCopy.shift();
    placesDirectionCopy.push(lastEl);
    setCardsDirection(placesDirectionCopy);
    changeCard(images.current[placesDirectionCopy[4]], 480, 0.6, 6, 0.85);
    changeCard(images.current[placesDirectionCopy[3]], 250, 0.8, 8, 0.9);
    changeCard(images.current[placesDirectionCopy[2]], 0, 1, 10, 1, { rotationY: 0 });
    changeCard(images.current[placesDirectionCopy[1]], -250, 0.8, 8, 0.9, { rotationY: 30 });
    changeCard(images.current[placesDirectionCopy[0]], -480, 0.6, 6, 0.85, { rotationY: 30 });

    changeCardDescription(
      [...images.current[cardsDirection[2]].children][0],
      [...images.current[cardsDirection[3]].children][0],
    );
  };

  useEffect(() => {
    images.current = [...slider.current.children];

    initCardsPosition(slider, images.current, cardsDirection);
    initCardsDescriptionPosition(images.current, cardsDirection[2]);
  }, []);

  return (
    <StyledWrapper>
      <StyledImagesWrapper ref={slider}>
        <Card {...places[0]} />
        <Card {...places[1]} />
        <Card {...places[2]} />
        <Card {...places[3]} />
        <Card {...places[4]} />
      </StyledImagesWrapper>
      <LeftArrow direction="prev" onClick={() => previousPlace()} />
      <RightArrow direction="next" onClick={() => nextPlace()} />
    </StyledWrapper>
  );
};

Slider.propTypes = {
  cardsDirection: PropTypes.arrayOf(PropTypes.number).isRequired,
  setCardsDirection: PropTypes.func.isRequired,
};

export default Slider;
