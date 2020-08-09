import React from 'react';
import {
  StyledMainTitle,
  StyledText,
  StyledLightText,
  StyledTitle,
} from './styled';

export const Text = (props) => <StyledText {...props} />;

export const Title = (props) => <StyledTitle {...props} />;

export const MainTitle = (props) => <StyledMainTitle {...props} />;

export const LightText = (props) => <StyledLightText {...props} />;
