import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
    ${InvertedButton} {
    margin-top: auto;
    //My addition start
    font-size: 1.2rem;
    //My addition end
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`;

export const CartItems = styled.div`
  //My addition start
  // height: 240px;
  height: 100%;
  //My addition end
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
