import styled from 'styled-components';

const AuthenticationContainer = styled.div`
  display: flex;
  max-width: 90rem;
  justify-content: space-between;
  margin: 3rem auto;

  @media screen and (max-width: 54.375em) {
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
  }
`;

export default AuthenticationContainer;
