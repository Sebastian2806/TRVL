import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isWebpSupported } from 'react-image-webp/dist/utils';
import CardDescription from './CardDescription';

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 500px;
  z-index: 6;
  transform: translate(-50%, -50%);
  background: url(${({ img }) => `"${img}"`}) no-repeat center;
  background-size: cover;
`;

const Card = ({ name, localization, src: { jpg, webp } }) => {
  return (
    <StyledWrapper img={isWebpSupported() ? webp : jpg}>
      <CardDescription name={name} localization={localization} />
    </StyledWrapper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  localization: PropTypes.string.isRequired,
  src: PropTypes.shape({
    jpg: PropTypes.string.isRequired,
    webp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
