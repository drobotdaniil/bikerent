import styled from 'styled-components';
import { backgroundColor } from './backgroundAccordingText';

export const StyledButton = styled.button`
  min-width: 130px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background: ${(props) => backgroundColor.get(props.text)};
  
  &:last-child {
    margin-left: 15px;
  }
`; 