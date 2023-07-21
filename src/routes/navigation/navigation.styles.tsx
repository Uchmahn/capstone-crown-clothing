import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  // Below 800px
  @media screen and (max-width: 50em) {
    height: 6rem;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;

  @media screen and (max-width: 50em) {
    width: 5rem;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 50em) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  cursor: pointer;
`;
