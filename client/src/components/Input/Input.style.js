import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

const { BLACK, GREY, DARKGREY, RED } = colors;
const { FONT_SIZES, FONT_NAME } = fonts;

export const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 40px;
  box-sizing: border-box;
  padding: 8px;
  color: ${BLACK};
  font-family: ${FONT_NAME};
  font-size: ${FONT_SIZES.MAIN};
  border: 1px solid;
  border-color: ${(props) => (props.isValid ? GREY : RED)};
  outline: none;
  border-radius: 5px;

  &:focus,
  &:hover {
    border-color: ${(props) => (props.isValid ? DARKGREY : RED)};
  }
`;

export const InputHolder = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: ${RED};
  white-space: nowrap;
`;
