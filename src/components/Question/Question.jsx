import React from 'react';
import { QuestionContainer, QuestionText, SubText } from './Question.Style';

const Question = ({ isVisible, questionText, subText }) => {
  return (
    <QuestionContainer $isVisible={isVisible}>
      <QuestionText>{questionText}</QuestionText>
      <SubText>{subText}</SubText>
    </QuestionContainer>
  );
};

export default Question; 