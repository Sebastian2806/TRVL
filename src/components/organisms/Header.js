import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title/Title';
import menuIcon from '../../assets/icons/menu.svg';
// import closeIcon from '../../assets/icons/close-btn.svg';
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

const Header = () => {
  const [menuSettings, setMenuSettings] = useState({
    isOpen: false,
    init: false,
  });

  const [disabled, setDisabled] = useState(false);

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
        {/* <img src={menuSettings.isOpen ? closeIcon : menuIcon} alt="Menu icon" /> */}
        <img src={menuIcon} alt="Menu icon" />
      </StyledMenuIconBtn>
      <Menu menuSettings={menuSettings} />
    </StyledWrapper>
  );
};

export default Header;
