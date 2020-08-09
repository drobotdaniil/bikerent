import React from 'react';
import { StyledButton } from './Button.style';
import { LightText } from '../Typography';

export const Button = (props) => {
  const { text, onClick } = props;
  return (
    <StyledButton {...props} onClick={onClick}>
      <LightText>{text}</LightText>
    </StyledButton>
  );
};
