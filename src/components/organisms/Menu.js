import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { openMenu, closeMenu } from '../../util/menuAnimations';
import germanyJpg from '../../assets/img/jpg/germany.jpg';
import norwayJpg from '../../assets/img/jpg/norway.jpg';
import germanyWebp from '../../assets/img/webp/germany.webp';
import norwayWebp from '../../assets/img/webp/norway.webp';
import Paragraph from '../atoms/Paragraph/Paragraph';

const StyledMenuWrapper = styled.div`
  position: absolute;
  display: block;
`;

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  background: ${({ theme }) => theme.yellow};

  transform: translateY(-100%);
  transform-origin: top right;
`;

const StyledMenuBackground = styled(StyledMenu)`
  z-index: 99;
  background: ${({ theme }) => theme.dark};
`;

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 33%;
  }
`;

const StyledNavigation = styled.nav`
  margin: -20px 0 0 30px;

  @media (min-width: 768px) {
    margin-left: 50px;
  }

  @media (min-width: 1140px) {
    margin-left: 100px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: repeat(5, 18px);
  grid-gap: 6px;

  @media (min-height: 281px) {
    grid-template-rows: repeat(5, 30px);
    grid-gap: 12px;
  }

  @media (min-width: 300px) and (min-height: 480px) {
    grid-gap: 20px;
    grid-template-rows: repeat(5, 50px);
  }
`;

const StyledLink = styled(Paragraph)`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.fonts.s};

  @media (min-height: 281px) {
    font-size: ${({ theme }) => theme.fonts.m};
  }

  @media (min-width: 300px) and (min-height: 480px) {
    font-size: ${({ theme }) => theme.fonts.xl};
  }
`;

const StyledContact = styled(Paragraph)`
  padding-top: 80px;
  position: absolute;
  bottom: 30px;
  left: 30px;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.fonts.m};

  @media (min-width: 768px) {
    left: 50px;
    bottom: 50px;
  }

  @media (min-width: 1140px) {
    left: 100px;
    bottom: 50px;
  }
`;

const StyledRightSection = styled(StyledSection)`
  flex-grow: 1;
  background: ${({ theme }) => theme.dark};
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledBox = styled.div`
  width: 100%;
  height: 50%;
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-height: 600px) {
    display: flex;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
  }
`;

const StyledFigure = styled.figure`
  margin: 0;
  color: ${({ theme }) => theme.light};
  width: 70%;
  max-width: 600px;
  display: block;

  & > blockquote {
    margin: 0;
    overflow: hidden;
  }

  @media (min-width: 1440px) {
    margin-left: 180px;
  }
`;

const StyledParagraphQuote = styled(Paragraph)`
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fonts.xl};
`;

const StyledQuoteFooter = styled.footer`
  margin-top: 20px;
  color: ${({ theme }) => theme.yellow};
  font-size: ${({ theme }) => theme.fonts.m};

  & > cite {
    margin-left: 10px;
    font-style: normal;
  }
`;

const StyledImagesBox = styled(StyledBox)`
  flex-direction: column;
  display: flex;
  height: 100%;

  @media (min-height: 600px) {
    height: 50%;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StyledPicture = styled.picture`
  position: relative;
  height: 50%;
  width: 100%;
  display: block;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 100%;
    width: 50%;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: fill;
`;

const StyledImageLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 101;
  background: ${({ theme }) => theme.yellow};

  transform: scaleX(0);
  transform-origin: top left;
`;

const Menu = ({ menuSettings: { isOpen, init } }) => {
  const menuWrapper = useRef(null);
  const menu = useRef(null);
  const menuBackground = useRef(null);
  const menuList = useRef(null);
  const menuImages = useRef([]);
  const menuLayers = useRef([]);
  const menuQuote = useRef(null);
  const menuQuoteAuthor = useRef(null);

  useEffect(() => {
    if (init) return;
    if (isOpen)
      openMenu(
        menuWrapper.current,
        menu.current,
        menuBackground.current,
        menuList.current,
        menuQuote.current,
        menuQuoteAuthor.current,
        menuImages.current,
        menuLayers.current,
      );
    else closeMenu(menuWrapper.current, menu.current, menuBackground.current);
  }, [isOpen, init]);

  return (
    <StyledMenuWrapper ref={menuWrapper}>
      <StyledMenu ref={menu}>
        <StyledSection>
          <StyledNavigation>
            <StyledList ref={menuList}>
              <li>
                <StyledLink as={NavLink} to="/">
                  home
                </StyledLink>
              </li>
              <li>
                <StyledLink as={NavLink} to="/">
                  discovery
                </StyledLink>
              </li>
              <li>
                <StyledLink as={NavLink} to="/">
                  destinations
                </StyledLink>
              </li>
              <li>
                <StyledLink as={NavLink} to="/">
                  about
                </StyledLink>
              </li>
              <li>
                <StyledLink as={NavLink} to="/">
                  contact
                </StyledLink>
              </li>
            </StyledList>
          </StyledNavigation>
          <StyledContact>contact@trvl.com</StyledContact>
        </StyledSection>
        <StyledRightSection>
          <StyledBox>
            <StyledFigure>
              <blockquote>
                <StyledParagraphQuote ref={menuQuote}>
                  The gladdest moment in human life is a departure into unknown lands
                </StyledParagraphQuote>
              </blockquote>
              <StyledQuoteFooter ref={menuQuoteAuthor}>
                -<cite>Richard Francis Burton</cite>
              </StyledQuoteFooter>
            </StyledFigure>
          </StyledBox>
          <StyledImagesBox>
            <StyledPicture>
              <source srcSet={germanyWebp} type="image/webp" />
              <StyledImg
                ref={(el) => {
                  menuImages.current[0] = el;
                }}
                src={germanyJpg}
                alt="Gray bridge and trees"
              />
              <StyledImageLayer
                ref={(el) => {
                  menuLayers.current[0] = el;
                }}
              />
            </StyledPicture>
            <StyledPicture>
              <source srcSet={norwayWebp} type="image/webp" />
              <StyledImg
                ref={(el) => {
                  menuImages.current[1] = el;
                }}
                src={norwayJpg}
                alt="Scenic view of snow capped mountains during night"
              />
              <StyledImageLayer
                ref={(el) => {
                  menuLayers.current[1] = el;
                }}
              />
            </StyledPicture>
          </StyledImagesBox>
        </StyledRightSection>
      </StyledMenu>
      <StyledMenuBackground ref={menuBackground} />
    </StyledMenuWrapper>
  );
};

Menu.propTypes = {
  menuSettings: PropTypes.shape({
    isOpen: PropTypes.bool.isRequired,
    init: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Menu;
