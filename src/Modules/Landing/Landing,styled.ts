import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};

  & img {
    margin-top: 10rem;
    width: 40%;
    height: auto;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 10rem;
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;
