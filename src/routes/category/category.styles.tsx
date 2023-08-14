import styled from 'styled-components';

export const CategoryContainer = styled.div``;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;

  @media screen and (max-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 25em) {
    grid-template-columns: 1fr;
    grid-row-gap: 2.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
