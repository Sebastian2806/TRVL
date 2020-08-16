import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import MapPin from '../../assets/icons/map-pin.svg';

const StyledWrapper = styled.div`
  width: 260px;
  height: 500px;
  background: url(${({ img }) => `"${img}"`}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: calc(50% + 40px);
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);

  ${({ secondary }) =>
    secondary &&
    css`
      transform: translate(${({ side }) => (side === 'left' ? '-255px' : '255px')}, -50%) perspective(1000px)
        rotate3d(0, 1, 0, ${({ side }) => (side === 'left' ? '0.05turn' : '-0.05turn')});
      width: 225px;
      height: 460px;
      opacity: 0.8;
      z-index: 9;
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      transform: translate(${({ side }) => (side === 'left' ? '-480px' : '480px')}, -50%) perspective(1000px)
        rotate3d(0, 1, 0, ${({ side }) => (side === 'left' ? '0.05turn' : '-0.05turn')});
      width: 205px;
      height: 415px;
      opacity: 0.6;
      z-index: 8;
    `}
`;

const StyledTitleWrapper = styled.div`
  width: 330px;
  height: fit-content;
  flex-shrink: 0;
`;

const StyledLine = styled.div`
  width: 70px;
  height: 3px;
  background-color: ${({ theme }) => theme.light};
`;

const StyledLocalizationWrapper = styled.div`
  margin-top: 13px;
  display: flex;
`;

const StyledLocalizationName = styled(Paragraph)`
  margin-left: 10px;
`;

const Card = ({ side, name, localization, src: { jpg }, ...props }) => {
  return (
    <StyledWrapper img={jpg} side={side} {...props}>
      {side === 'center' && (
        <StyledTitleWrapper>
          <Paragraph as="h2" uppercase="true" fontSize="xl">
            {name}
          </Paragraph>
          <StyledLine />
          <StyledLocalizationWrapper>
            <img src={MapPin} alt="Map pin" />
            <StyledLocalizationName>{localization}</StyledLocalizationName>
          </StyledLocalizationWrapper>
        </StyledTitleWrapper>
      )}
    </StyledWrapper>
  );
};

Card.propTypes = {
  side: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  src: PropTypes.shape({
    jpg: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
