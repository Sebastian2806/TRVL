import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledWrapper = styled.nav`
  flex-grow: 1;
  display: flex;
  align-items: center;
  z-index: 85;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: -40px;
  padding-left: 20px;
  list-style: none;
  font-family: ${({ theme }) => `${theme.fontsFamily.cormorant}, serif`};
  font-size: ${({ theme }) => theme.fonts.xxl};

  @media (min-width: 700px) {
    padding: 0;
    padding-right: 50px;
  }

  @media (min-width: 1024px) {
    padding-right: 20px;
  }

  @media (min-width: 1100px) {
    padding-right: 80px;
  }

  @media (min-width: 1200px) {
    padding-right: 180px;
  }

  @media (max-height: 700px) {
    padding: 0;
  }

  @media (max-height: 700px) and (max-width: 700px) {
    padding: 0;
    padding-left: 20px;
  }

  &::last-child() {
    padding: 0;
  }
`;

const StyledLi = styled.li`
  position: relative;
  padding-bottom: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.xxl};
  position: relative;

  @media (max-width: 315px) {
    font-size: ${({ theme }) => `calc(${theme.fonts.xl} + 2rem)`};
  }

  @media (orientation: landscape) {
    font-size: ${({ theme }) => theme.fonts.xl};
  }

  @media (orientation: landscape) and (min-height: 500px) {
    font-size: ${({ theme }) => theme.fonts.xxl};
  }

  @media (max-width: 315px) and (max-height: 500px) {
    font-size: ${({ theme }) => theme.fonts.xl};
  }

  @media (min-width: 1024px) and (min-height: 900px) {
    font-size: ${({ theme }) => theme.fonts.xxxl};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    transform: scaleX(0);
    transform-origin: top right;
    transition: transform 0.2s ease-in-out;
    background: ${({ theme }) => theme.yellow};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: top left;
  }
`;

const StyledParagraphCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 90;
  background-color: ${({ theme }) => theme.dark};
`;

const MenuItems = ({ menuItems }) => {
  return (
    <StyledWrapper>
      <StyledUl ref={menuItems}>
        <StyledLi>
          <StyledParagraphCover />
          <StyledParagraph color="dark">Home</StyledParagraph>
        </StyledLi>
        <StyledLi>
          <StyledParagraphCover />
          <StyledParagraph color="dark">Places</StyledParagraph>
        </StyledLi>
        <StyledLi>
          <StyledParagraphCover />
          <StyledParagraph color="dark">About</StyledParagraph>
        </StyledLi>
      </StyledUl>
    </StyledWrapper>
  );
};

MenuItems.propTypes = {
  menuItems: PropTypes.shape({ current: PropTypes.instanceOf(HTMLUListElement) }).isRequired,
};

export default MenuItems;
