import React from 'react';
import { useDialog, Container } from 'Hooks/useDialog';
import { Canvas } from 'Modules/Canvas';
import { Landing } from 'Modules/Landing';
import { OptionsDialog } from 'Modules/OptionsDialog';
import { Button } from './Shared/Button';

import './App.css';

export const App = () => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const { isOpen, handleClose, getToggleProps, getContainerProps } =
    useDialog();

  const handleGameStart = () => setIsPlaying(true);

  return (
    <div className="App">
      {isPlaying ? (
        <Canvas />
      ) : (
        <React.Fragment>
          <Landing
            handleGameStart={handleGameStart}
            optionsButton={<Button {...getToggleProps()}>Opcje</Button>}
          />
        </React.Fragment>
      )}
      {isOpen && (
        <Container {...getContainerProps()}>
          <OptionsDialog handleClose={handleClose} />
        </Container>
      )}
    </div>
  );
};
