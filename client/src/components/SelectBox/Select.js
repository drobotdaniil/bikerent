import React from 'react';
import Select from 'react-select';
import { Label } from '../Label';
import { SelectWrapper, styles } from './Select.style';
import { ErrorMessage } from '../Input/Input.style';

export const SelectBox = (props) => {
  const { id, label, options, value, handleChange, error } = props;

  const isValid = !error;
  return (
    <SelectWrapper>
      <Label id={id} text={label} />
      <Select
        id={id}
        value={value}
        isValid={isValid}
        onChange={handleChange}
        options={options}
        styles={styles}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  );
};
