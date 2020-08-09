import styled from 'styled-components';
import { colors } from '../../styles/theme';

const { SILVER, GREY } = colors;

export const FormWrapper = styled.div`
  margin-top: 60px;
`;

export const StyledForm = styled.form`
  padding: 25px;
  background: ${SILVER};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0 50px;
  border-radius: 5px;
  border: 1px solid ${GREY};

  button {
    align-self: flex-end;
  }
`;

export const LeftInputs = styled.div`
  width: 76%;
  display: flex;

  & > div:first-child,
  & > div:last-child {
    flex-basis: 100px;
    flex-grow: 5;
    margin-right: 15px;
  }
`;

export const RightInputs = styled.div`
  width: 24%;
  display: flex;
  justify-content: space-between;
`;
