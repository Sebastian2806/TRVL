import React, { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { CSSTransition } from 'react-transition-group';
import CardDescription from './CardDescription';
import { initCardPosition, descriptionIn, descriptionOut } from '../../util/sliderAnimations';
import SliderContext from '../../context/SliderContext';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 400px;
  z-index: 10;
  transform: translateX(-50%);
  background: url(${({ img }) => `"${img}"`}) no-repeat center;
  background-size: cover;

  @media (min-height: 600px) {
    width: 260px;
    height: 500px;
  }
`;

const Card = ({ id, name, localization, src: { jpg, webp }, pos }) => {
  const { cardsDirection } = useContext(SliderContext);
  const [showDesc, setShowDesc] = useState(false);
  const card = useRef(null);
  const cardDescription = useRef(null);

  useEffect(() => {
    initCardPosition(card.current, pos, pos === 0 || pos === 1 ? -1 : 1, true);
    [cardDescription.current] = [...card.current.children];
  }, []);

  useEffect(() => {
    initCardPosition(card.current, pos, pos === 0 || pos === 1 ? -1 : 1);
    setShowDesc(id === cardsDirection[2]);
  }, [pos]);

  return (
    <StyledWrapper ref={card} img={isWebpSupported() ? webp : jpg}>
      <CSSTransition
        in={showDesc}
        timeout={1400}
        onEnter={() => descriptionIn(cardDescription.current)}
        onExit={() => descriptionOut(cardDescription.current)}
        classNames="desc"
      >
        <CardDescription name={name} localization={localization} />
      </CSSTransition>
    </StyledWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  src: PropTypes.shape({
    jpg: PropTypes.string.isRequired,
    webp: PropTypes.string.isRequired,
  }).isRequired,
  pos: PropTypes.number.isRequired,
};

export default Card;
