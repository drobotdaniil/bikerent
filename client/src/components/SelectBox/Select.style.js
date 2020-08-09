import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

const { GREY, DARKGREY, RED } = colors;
const { FONT_NAME, FONT_SIZES } = fonts;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const styles = {
  control: (provided, { selectProps: { isValid } }) => ({
    ...provided,
    minHeight: 40,
    boxSizing: 'border-box',
    boxShadow: 'none',
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: isValid ? GREY : RED,
    ':hover': {
      borderColor: isValid ? DARKGREY : RED,
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 2,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    paddingRight: 14,
    svg: {
      width: 18,
      height: 10,
    },
    div: {
      padding: 0,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    fontFamily: FONT_NAME,
    fontSize: FONT_SIZES.MAIN,
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
