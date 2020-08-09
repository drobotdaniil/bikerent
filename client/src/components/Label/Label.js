import React from 'react';
import { StyledLabel } from './Label.style';

export const Label = (props) => {
  const { id, text } = props;

  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
};
