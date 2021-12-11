import React from 'react';
import logo from 'Assets/logo.png';

import { Button } from 'Shared/Button';
import { ButtonsContainer, StyledContainer } from './Landing,styled';

interface Props {
  handleGameStart: () => void;
  optionsButton: JSX.Element;
}

export const Landing = ({
  handleGameStart,
  optionsButton
}: Props): JSX.Element => {
  return (
    <StyledContainer>
      <img src={logo} alt="Turbo wonsz" />
      <ButtonsContainer>
        <Button onClick={handleGameStart}>Graj</Button>
        {optionsButton}
      </ButtonsContainer>
    </StyledContainer>
  );
};
