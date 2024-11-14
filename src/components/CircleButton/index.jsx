import React from 'react';
import { Button, CircleImage } from './styles';

const CircleButton = ({ onClick, isExpanded, imageSrc }) => {
  return (
    <Button onClick={onClick} $isExpanded={isExpanded}>
      <CircleImage 
        src={imageSrc} 
        alt="Circle" 
        $isExpanded={isExpanded} 
      />
    </Button>
  );
};

export default CircleButton; 