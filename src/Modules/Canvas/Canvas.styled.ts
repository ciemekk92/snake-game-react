import styled from 'styled-components';

interface CanvasProps {
  readonly isGameOver: boolean;
}

export const StyledWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const StyledControls = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledCanvas = styled.canvas<CanvasProps>`
  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.accent};
  opacity: ${(props) => (props.isGameOver ? 0.3 : 1)};
`;
