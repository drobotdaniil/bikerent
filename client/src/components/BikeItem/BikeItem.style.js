import styled from 'styled-components';
import { colors } from '../../styles/theme';

const { GREY, WHITE } = colors;

export const ItemWrapper = styled.div`
  background: ${WHITE};
  border: 1px solid ${GREY};
  border-radius: 5px;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
`;
