import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 0.1rem solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 1.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 1rem;
    }
  }

  .remove-button {
    padding-left: 1.2rem;
    cursor: pointer;
  }
`;
