import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';

const { BLACK, WHITE } = colors;
const { FONT_NAME, FONT_SIZES } = fonts;

export const StyledMainTitle = styled.h1`
  color: ${BLACK};
  margin: 0;
  font-size: ${FONT_SIZES.H1};
  font-family: ${FONT_NAME};
`;

export const StyledText = styled.p`
  color: ${BLACK};
  margin: 0;
  font-size: ${FONT_SIZES.MAIN};
  font-family: ${FONT_NAME};
`;

export const StyledTitle = styled.h4`
  color: ${BLACK};
  margin: 0;
  font-size: ${FONT_SIZES.H4};
  font-family: ${FONT_NAME};
`;

export const StyledLightText = styled.p`
  color: ${WHITE};
  margin: 0;
  font-size: ${FONT_SIZES.LIGHT};
  font-family: ${FONT_NAME};
`;
