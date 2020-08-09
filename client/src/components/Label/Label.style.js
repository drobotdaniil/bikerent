import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

const { BLACK } = colors;
const { FONT_SIZES, FONT_NAME } = fonts;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 7px;
  color: ${BLACK};
  font-size: ${FONT_SIZES.LIGHT};
  font-family: ${FONT_NAME};
`;
