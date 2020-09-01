import React, { useRef, useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import { CSSTransition } from 'react-transition-group';
import { gsap } from 'gsap';
import _ from 'lodash';
import CardDescription from './CardDescription';
import { descriptionIn, descriptionOut } from '../../util/sliderAnimations';
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
  const card = useRef(null);
  const cardDescription = useRef(null);
  const [resize, setResize] = useState(0);
  const windowSize = useWindowSize();

  const setCard = (ref, element, sign = 1, init = false) => {
    // console.log(cardsDirection);
    // console.log(element, pos);

    const duration = init ? 0 : 0.6;
    const ease = 'expo.inOut';
    const delay = init ? 0 : 0.3;
    let width = 0;
    let delayWhenIn = 0;
    let scale = 1;
    let opacity = 1;
    let rotationY = 0;
    let zIndex = 10;

    if (element !== 2) {
      width = window.innerHeight < 650 ? 208 : 260;
      rotationY = -32 * sign;
    }
    if (element === 1 || element === 3) {
      delayWhenIn = 0.05;
      scale = 0.95;
      opacity = 0.7;
      zIndex = 8;
    } else if (element === 0 || element === 4) {
      delayWhenIn = 0.1;
      width *= 2;
      scale = 0.9;
      opacity = 0.4;
      zIndex = 6;
    }

    gsap.to(ref, {
      duration,
      zIndex,
      opacity,
      x: width * sign,
      scale,
      rotationY,
      ease,
      delay,
    });

    if (init) {
      gsap.to(ref, 1.5, {
        y: 0,
        ease,
        delay: delayWhenIn,
      });
    }
  };

  useEffect(() => {
    setCard(card.current, pos, pos === 0 || pos === 1 ? -1 : 1, true);
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
      setCard(card.current, pos, pos === 0 || pos === 1 ? -1 : 1);
      setShowDesc(id === cardsDirection[2]);
    }
  }, [pos]);

  useEffect(() => {
    setCard(card.current, pos, pos === 0 || pos === 1 ? -1 : 1);
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
