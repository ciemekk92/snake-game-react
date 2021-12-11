import styled from 'styled-components';

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
  height: 30vh;

  & h2 {
    margin-top: 1.6rem;
    font-size: 2rem;
  }
`;
