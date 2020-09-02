import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Title from '../atoms/Title/Title';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-menu.svg';
import Menu from './Menu';

const StyledWrapper = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 150;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 1140px) {
    padding: 0 100px;
  }
`;

const StyledMenuIconBtn = styled.button`
  z-index: 200;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const StyledTitle = styled(Title)`
  z-index: 200;
`;

const StyledCloseIcon = styled(CloseIcon)`
  display: none;
`;

const Header = () => {
  const menuBtnOpen = useRef(null);
  const menuBtnClose = useRef(null);

  const [menuSettings, setMenuSettings] = useState({
    isOpen: false,
    init: false,
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const arrow = [...menuBtnClose.current.children].slice(0, 2);
    const circle = [...menuBtnClose.current.children][2];
    const tl = gsap.timeline();
    const ease = 'power3.out';
    if (menuSettings.isOpen) {
      tl.to([...menuBtnOpen.current.children], 0.4, {
        delay: 0.5,
        stagger: 0.03,
        css: {
          strokeDashoffset: 24,
        },
        ease,
      })
        .to(menuBtnOpen.current, 0, {
          display: 'none',
        })
        .to(menuBtnClose.current, 0, {
          display: 'block',
        })
        .to([...arrow], 0.6, {
          delay: 0.2,
          css: {
            strokeDashoffset: 0,
          },
          ease,
        })
        .to(circle, 0.6, {
          delay: 0.2,
          css: {
            strokeDashoffset: 0,
          },
          ease,
        });
    } else {
      tl.to(circle, 0.6, {
        css: {
          strokeDashoffset: 111,
        },
        ease,
      })
        .to(arrow[0], 0.6, {
          css: {
            strokeDashoffset: 14,
          },
          ease,
        })
        .to(arrow[1], 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: 20,
          },
          ease,
        })
        .to(menuBtnClose.current, 0, {
          display: 'none',
        })
        .to(menuBtnOpen.current, 0, {
          display: 'block',
        })
        .to([...menuBtnOpen.current.children], 0.4, {
          stagger: {
            each: 0.03,
            from: 'end',
          },
          css: {
            strokeDashoffset: 0,
          },
          ease,
        });
    }
  }, [menuSettings]);

  const disabledMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  const handleClick = () => {
    disabledMenu();
    setMenuSettings({
      isOpen: !menuSettings.isOpen,
      init: false,
    });
  };

  return (
    <StyledWrapper>
      <StyledTitle isOpen={menuSettings.isOpen}>TRVL</StyledTitle>
      <StyledMenuIconBtn disabled={disabled} onClick={handleClick}>
        <MenuIcon ref={menuBtnOpen} />
        <StyledCloseIcon ref={menuBtnClose} />
      </StyledMenuIconBtn>
      <Menu menuSettings={menuSettings} />
    </StyledWrapper>
  );
};

export default Header;
