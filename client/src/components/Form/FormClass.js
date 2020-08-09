import React from 'react';
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
} from '../../utils/form-validation';
import { options } from '../../constants/selectOptions';
import { addBikeToList } from '../../store/actions/bikeList';

const extraFieldPropsByKey = {
  [InputKeys.name]: { label: 'Bike Name', type: 'text' },
  [InputKeys.price]: { label: 'Bike Price', type: 'number', width: '130px' },
};

const initState = {
  name: '',
  price: '',
  select: '',
  nameError: '',
  priceError: '',
  selectError: '',
};

class FormComponent extends React.Component {
  state = initState;

  render() {
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
            {this.renderTextField(InputKeys.name)}
            {this.renderSelectField()}
          </LeftInputs>
          <RightInputs>
            {this.renderTextField(InputKeys.price)}
            <Button text={'Submit rent'} onClick={this.onSubmit} />
          </RightInputs>
        </StyledForm>
      </FormWrapper>
    );
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSelectChange = (option) => {
    this.setState({ [InputKeys.select]: option.value });
  };

  validate = () => {
    let nameError = '';
    let priceError = '';
    let selectError = '';

    if (!validationMethods.get(InputKeys.name)(this.state.name)) {
      nameError = errorMessages[InputKeys.name];
    }

    if (!validationMethods.get(InputKeys.price)(this.state.price)) {
      priceError = errorMessages[InputKeys.price];
    }

    if (!validationMethods.get(InputKeys.select)(this.state.select)) {
      selectError = errorMessages[InputKeys.select];
    }

    if (nameError || priceError || selectError) {
      this.setState({ nameError, priceError, selectError });
      return false;
    }

    return true;
  };

  onSubmit = () => {
    const { addBikeToList } = this.props;
    const isValid = this.validate();
    if (isValid) {
      addBikeToList({
        name: this.state.name,
        type: this.state.select,
        price: this.state.price,
      });
      this.setState(initState);
    }
  };

  renderTextField = (fieldKey) => {
    const { name, price, nameError, priceError } = this.state;
    return (
      <Input
        id={fieldKey}
        error={fieldKey === 'name' ? nameError : priceError}
        value={fieldKey === 'name' ? name : price}
        name={fieldKey}
        onChange={this.onInputChange}
        {...extraFieldPropsByKey[fieldKey]}
      />
    );
  };

  renderSelectField = () => {
    const { select, selectError } = this.state;

    return (
      <SelectBox
        value={{ select, label: select }}
        id='custom-select'
        label='Bike Type'
        error={selectError}
        handleChange={this.onSelectChange}
        options={options}
      />
    );
  };
}

const mapDispatchToProps = {
  addBikeToList,
};

export default connect(null, mapDispatchToProps)(FormComponent);
