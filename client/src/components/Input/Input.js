import React from 'react';
import { InputHolder, StyledInput, ErrorMessage } from './Input.style';
import { Label } from '../Label';

export const Input = (props) => {
  const { id, label, error } = props;
  const isValid = !error;
  return (
    <InputHolder>
      <Label id={id} text={label} />
      <StyledInput {...props} isValid={isValid} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputHolder>
  );
};
