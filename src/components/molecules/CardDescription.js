import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';
import MapPin from '../../assets/icons/map-pin.svg';

const StyledWrapper = styled.div`
  opacity: 0;
  flex-shrink: 0;
  z-index: 15;

  @media (max-width: 400px) {
    max-width: 300px;
  }

  &.desc-enter {
    opacity: 0;
    visibility: 'hidden';
  }

  &.desc-enter-active {
    opacity: 1;
    visibility: 'hidden';
    transition: opacity 500ms 900ms ease-in-out;
  }

  &.desc-enter-done {
    opacity: 1;
    visibility: 'hidden';
  }

  &.desc-exit {
    opacity: 1;
    visibility: 'hidden';
  }

  &.desc-exit-active {
    opacity: 0;
    visibility: 'hidden';
    transition: opacity 400ms ease-in-out;
  }
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

const StyledCardTitle = styled(Paragraph)`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.xl};

  @media (min-width: 756px) {
    font-size: ${({ theme }) => theme.fonts.xxl};
  }
`;

const StyledLocalizationName = styled(Paragraph)`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fonts.l};

  @media (min-width: 756px) {
    font-size: ${({ theme }) => theme.fonts.xl};
  }
`;

const CardDescription = ({ name, localization }) => {
  return (
    <StyledWrapper>
      <StyledCardTitle as="h2">{name}</StyledCardTitle>
      <StyledLine />
      <StyledLocalizationWrapper>
        <img src={MapPin} alt="Map pin" />
        <StyledLocalizationName>{localization}</StyledLocalizationName>
      </StyledLocalizationWrapper>
    </StyledWrapper>
  );
};

CardDescription.propTypes = {
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
};

export default CardDescription;
