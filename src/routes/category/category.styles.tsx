import styled from 'styled-components';

export const CategoryContainer = styled.div`
  .category-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;
