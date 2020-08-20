import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { openMenu, closeMenu } from '../../util/menuAnimations';
import MenuItems from '../molecules/MenuItems';
import topMenuImgJpg from '../../assets/img/jpg/top-menu-img.jpg';
import backMenuImgJpg from '../../assets/img/jpg/back-menu-img.jpg';
import topMenuImgWebp from '../../assets/img/webp/top-menu-img.webp';
import backMenuImgWebp from '../../assets/img/webp/back-menu-img.webp';

const StyledMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  z-index: 78;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  transform: translateY(-100%);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  padding-top: 80px;
  overflow: hidden;
  z-index: 80;
  background: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};

  @media (min-height: 800px) and (max-width: 650px), (min-width: 700px) {
    justify-content: center;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  transform: translateY(-100%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: ${({ theme }) => theme.dark};
  overflow: hidden;
  z-index: -1;
`;

const StyledWrapperContainer = styled.div`
  display: flex;
`;

const StyledImagesWrapper = styled.div`
  display: none;
  position: relative;
  width: 50%;
  align-items: center;

  @media (min-width: 700px) and (min-height: 700px) {
    display: flex;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  width: 300px;
  height: 550px;

  @media (min-width: 1024px) and (min-height: 850px) {
    width: 500px;
    height: 800px;
  }
`;

const StyledRect = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 81;
  width: 190px;
  height: 260px;
  background: ${({ theme }) => theme.yellow};

  @media (min-width: 1024px) and (min-height: 850px) {
    width: 260px;
    height: 460px;
  }
`;

const StyledTopImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 82;
  width: 190px;

  @media (min-width: 1024px) and (min-height: 850px) {
    width: 290px;
  }
`;

const StyledBackImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 83;
  width: 240px;

  @media (min-width: 1024px) and (min-height: 850px) {
    width: 370px;
  }
`;

const Menu = ({ menuSettings: { isOpen, init } }) => {
  const menuWrapper = useRef(null);
  const menu = useRef(null);
  const menuBackground = useRef(null);
  const menuItems = useRef(null);

  useEffect(() => {
    if (init) return;
    if (isOpen) {
      gsap.to(menuWrapper.current, {
        duration: 0,
        css: { display: 'block' },
      });

      openMenu(menu.current, menuBackground.current, menuItems);
    } else {
      gsap.to(menuWrapper.current, {
        duration: 1,
        css: { display: 'none' },
      });

      closeMenu(menu.current, menuBackground.current, menuItems);
    }
  }, [isOpen, init]);

  return (
    <StyledMenuWrapper ref={menuWrapper}>
      <StyledWrapper ref={menu}>
        <StyledWrapperContainer>
          <MenuItems menuItems={menuItems} />
          <StyledImagesWrapper>
            <StyledContainer>
              <picture>
                <source srcSet={backMenuImgWebp} type="image/webp" />
                <StyledTopImg src={backMenuImgJpg} alt="Lake in Canada" />
              </picture>
              <picture>
                <source srcSet={topMenuImgWebp} type="image/webp" />
                <StyledBackImg src={topMenuImgJpg} alt="Nusapenida, Indonesia" />
              </picture>
              <StyledRect />
            </StyledContainer>
          </StyledImagesWrapper>
        </StyledWrapperContainer>
      </StyledWrapper>
      <StyledBackground ref={menuBackground} />
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
