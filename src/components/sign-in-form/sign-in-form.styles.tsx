import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  @media screen and (max-width: 25em) {
    max-width: 25rem;
  }
  h2 {
    margin: 1rem 0;
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 25em) {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
