import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem;
    display: none;
    // my additions (start)
    text-align: center;
    // (end)
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  // Below 800px
  @media screen and (max-width: 50em) {
    width: 40vw;

    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 1rem;

      &:hover {
        img {
          opacity: unset;
        }

        button {
          opacity: unset;
        }
      }
    }
  }

  // Below 400px
  @media screen and (max-width: 25em) {
    width: 80vw;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
`;
export const Price = styled.span`
  width: 10%;
`;
