import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.accent};
  text-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.7);
  border: none;
  font-size: 1.6rem;
  height: 3.6rem;
  min-width: 16rem;
  padding: 0 0.5rem;
  border-radius: 3rem;
  color: ${(props) => props.theme.text};
  box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  cursor: pointer;
  backface-visibility: visible;

  &:hover {
    background-color: ${(props) => props.theme.accentDark};
    transform: translateY(-0.2rem);
  }
`;
