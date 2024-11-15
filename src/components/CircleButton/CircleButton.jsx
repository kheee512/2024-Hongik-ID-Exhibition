import React from 'react';
import { Button, CircleImage } from './CircleButton.Style';

const CircleButton = ({ onClick, isExpanded, imageSrc, isSelected, size }) => {
  return (
    <Button onClick={onClick} $isExpanded={isExpanded} $isSelected={isSelected}>
      <CircleImage 
        src={imageSrc} 
        alt="Circle" 
        $isExpanded={isExpanded}
        $isSelected={isSelected}
        $size={size}
      />
    </Button>
  );
};

export default CircleButton; 