import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Title } from '../Typography';
import { Button } from '../Button';
import { Input } from '../Input';
import { StyledForm, LeftInputs, RightInputs, FormWrapper } from './Form.style';
import { SelectBox } from '../SelectBox/Select';
import {
  validationMethods,
  errorMessages,
  InputKeys,
  bikeFormInputKeys,
} from '../../utils/form-validation';
import { options } from '../../constants/selectOptions';
import { addBikeToList } from '../../store/actions/bikeList';

const extraFieldPropsByKey = {
  [InputKeys.name]: { label: 'Bike Name', type: 'text' },
  [InputKeys.price]: { label: 'Bike Price', type: 'number', width: '130px' },
};

const initState = {
  name: { value: '', isValid: true },
  price: { value: '', isValid: true },
  select: { value: '', isValid: true },
  // isValidForm: false,
};

// tried to do this component with
// hooks and real life form validation,
// but couldn't :(
// it works if change some lines, but with bugs
const FormComponent = (props) => {
  const [form, setForm] = useState(initState);
  const [isValid, setValid] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    validateForm();
  }, [form]);

  const onSelectChange = (option) => {
    validateField(InputKeys.select, option.value);
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    validateField(name, value);
    // validateForm();
  };

  const renderTextField = (fieldKey) => {
    const { value, isValid } = form[fieldKey];

    return (
      <Input
        id={fieldKey}
        isValid={isValid}
        value={value}
        name={fieldKey}
        onChange={onInputChange}
        error={errorMessages[fieldKey]}
        {...extraFieldPropsByKey[fieldKey]}
      />
    );
  };

  const renderSelectField = () => {
    const {
      select: { value, isValid },
    } = form;

    return (
      <SelectBox
        value={{ value, label: value }}
        id='custom-select'
        isValid={isValid}
        label='Bike Type'
        error={errorMessages[InputKeys.select]}
        handleChange={onSelectChange}
        options={options}
      />
    );
  };

  const validateField = (fieldKey, value) => {
    setForm((prevState) => ({
      ...prevState,
      [fieldKey]: { value, isValid: validationMethods.get(fieldKey)(value) },
    }));
  };

  const validateForm = () => {
    // setForm((prevState) => ({
    //   ...prevState,
    //   isValidForm: bikeFormInputKeys.every(
    //     (fieldKey) => form[fieldKey].isValid
    //   ),
    // }));
    setValid(bikeFormInputKeys.every((fieldKey) => form[fieldKey].isValid));
  };

  const onSubmit = () => {
    const { addBikeToList } = props;
    const { isValidForm, ...fields } = form;
    bikeFormInputKeys.forEach((fieldName) => {
      validateField(fieldName, fields[fieldName].value);
    });

    console.log('isValid ', isValid);

    if (isValid) {
      addBikeToList({
        name: form.name.value,
        type: form.select.value,
        price: form.price.value,
      });
      setForm(initState);
      setValid(false);
    }
  };

  return (
    <FormWrapper
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Title>
        <span role='img' aria-label='emoji'>
          &#129297;
        </span>{' '}
        Create new rent
      </Title>
      <StyledForm>
        <LeftInputs>
          {renderTextField(InputKeys.name)}
          {renderSelectField()}
        </LeftInputs>
        <RightInputs>
          {renderTextField(InputKeys.price)}
          <Button text={'Submit rent'} onClick={onSubmit} />
        </RightInputs>
      </StyledForm>
    </FormWrapper>
  );
};

const mapDispatchToProps = {
  addBikeToList,
};

export const Form = connect(null, mapDispatchToProps)(FormComponent);
