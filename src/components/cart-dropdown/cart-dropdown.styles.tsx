import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
   {
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
      margin-top: auto;
      //My addition start
      font-size: 12px;
      //My addition end
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
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

// export const CheckoutButton = styled(Button)`
//   margin-top: auto;
//   //My addition start
//   font-size: 12px;
//   //My addition end
// `;

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

// .cart-items {
//   //My addition start
//   // height: 240px;
//   height: 100%;
//   //My addition end
//   display: flex;
//   flex-direction: column;
//   overflow: scroll;
// }

//   button {
//     margin-top: auto;
//     //My addition start
//     font-size: 12px;
//     //My addition end
//   }
// }
