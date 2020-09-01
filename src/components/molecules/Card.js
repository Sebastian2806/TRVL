import React, { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import _ from 'lodash';
import CardDescription from './CardDescription';
import { initCardPosition, descriptionIn, descriptionOut } from '../../util/sliderAnimations';
import SliderContext from '../../context/SliderContext';
import useWindowSize from '../../hooks/useWindowSize';

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
  transform: translateX(-50%) translateY(100vh);
  background: url(${({ img }) => `"${img}"`}) no-repeat center;
  background-size: cover;

  @media (min-height: 650px) {
    width: 260px;
    height: 500px;
  }
`;

const Card = ({ id, name, localization, src: { jpg, webp }, pos }) => {
  const { cardsDirection } = useContext(SliderContext);
  const [showDesc, setShowDesc] = useState(false);
  const [resize, setResize] = useState(0);
  const card = useRef(null);
  const cardDescription = useRef(null);
  const windowSize = useWindowSize();

  useEffect(() => {
    initCardPosition(card.current, pos, true);
    [cardDescription.current] = [...card.current.children];

    const debouncedInit = _.debounce(setResize, 300);

    window.addEventListener('resize', () => {
      debouncedInit((prevState) => prevState + 1);
    });
    return () => {
      window.removeEventListener('resize', debouncedInit);
    };
  }, []);

  useEffect(() => {
    if (cardDescription) {
      initCardPosition(card.current, pos);
      setShowDesc(id === cardsDirection[2]);
    }
  }, [pos]);

  useEffect(() => {
    initCardPosition(card.current, pos);
  }, [resize]);

  const skewCard = (e) => {
    if (
      !card.current ||
      !card.current.contains(e.target) ||
      !card.current.classList.contains('card') ||
      id !== cardsDirection[2]
    )
      return;

    const X = e.pageX;
    const Y = e.pageY;

    gsap.to(card.current, 0.1, {
      rotationY: (X - windowSize.width / 2) * 0.05,
      rotationX: (Y - windowSize.height / 2) * 0.03 * -1,
    });
  };

  const cardLeave = () => {
    gsap.to(card.current, 0.1, {
      rotationY: 0,
      rotationX: 0,
    });
  };

  return (
    <StyledWrapper
      className={id === cardsDirection[2] ? 'card' : null}
      onMouseMove={id === cardsDirection[2] ? skewCard : null}
      onMouseLeave={id === cardsDirection[2] ? cardLeave : null}
      ref={card}
      img={isWebpSupported() ? webp : jpg}
    >
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
