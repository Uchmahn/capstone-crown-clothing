import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 50em) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;

  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5rem;
    grid-row-gap: 2.5rem;
  }
  @media screen and (max-width: 25em) {
    grid-template-columns: 1fr;
    grid-row-gap: 2.5rem;
  }
`;
