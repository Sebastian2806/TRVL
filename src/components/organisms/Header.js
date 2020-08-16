import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Title from '../atoms/Title/Title';
import Paragraph from '../atoms/Paragraph/Paragraph';

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
  z-index: 100;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin-left: 57px;
`;

const StyledLink = styled(Paragraph)`
  text-decoration: none;

  &.active {
    font-weight: ${({ theme }) => theme.weight.bold};
    border-bottom: 3px solid ${({ theme }) => theme.yellow};
  }
`;

const Header = () => {
  return (
    <StyledWrapper>
      <Title>TRVL</Title>
      <nav>
        <StyledList>
          <StyledListItem>
            <StyledLink exact as={NavLink} to="/" uppercase="true" activeClassName="active">
              home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink as={NavLink} to="/destinations" uppercase="true" activeClassName="active">
              destinations
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink as={NavLink} to="/contact" uppercase="true" activeClassName="active">
              contact
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </nav>
    </StyledWrapper>
  );
};

export default Header;
