import React from 'react';
import { Button, CircleImage, ImageContainer } from './CircleButton.Style';

const CircleButton = ({ onClick, isExpanded, imageSrc, isSelected, size, noShadow, isMainImage }) => {
  return (
    <Button onClick={onClick} $isExpanded={isExpanded} $isSelected={isSelected}>
      <ImageContainer $size={size}>
        <CircleImage 
          key={imageSrc}
          src={imageSrc} 
          alt="Circle" 
          $isExpanded={isExpanded}
          $isSelected={isSelected}
          $size={size}
          $noShadow={noShadow}
          $isMainImage={isMainImage}
        />
      </ImageContainer>
    </Button>
  );
};

export default CircleButton; 