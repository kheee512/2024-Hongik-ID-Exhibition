import React from 'react';
import { Button } from './styles';

const StartButton = ({ onClick, isVisible }) => {
  return (
    <Button onClick={onClick} $isVisible={isVisible}>
      Start
    </Button>
  );
};

export default StartButton; 