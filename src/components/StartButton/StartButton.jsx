import React from 'react';
import { Button } from './StartButton.Style';

const StartButton = ({ onClick, isVisible }) => {
  return (
    <Button onClick={onClick} $isVisible={isVisible}>
      Start
    </Button>
  );
};

export default StartButton; 