import styled from 'styled-components';

const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  .checkout-header {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.1rem solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 3rem;
    margin-left: auto;
    font-size: 3.6rem;
  }
`;

export default CheckoutContainer;
