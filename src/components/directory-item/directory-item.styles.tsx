import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }: { imageUrl: string }) =>
    `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-weight: bold;
    margin: 0 0.6rem 0;
    font-size: 2.2rem;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1.6rem;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 24rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid black;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;
  position: relative;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }

  @media screen and (max-width: 50em) {
    height: 20rem;
  }
`;
