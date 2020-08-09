import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title/Title';

const Header = () => {
  const StyledWrapper = styled.header`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px;
  `;

  return (
    <StyledWrapper>
      <Title>TRVL</Title>
      <nav>
        <ul>
          <li>
            <span>home</span>
          </li>
          <li>
            <span>destinations</span>
          </li>
          <li>
            <span>contact</span>
          </li>
        </ul>
      </nav>
    </StyledWrapper>
  );
};

export default Header;
