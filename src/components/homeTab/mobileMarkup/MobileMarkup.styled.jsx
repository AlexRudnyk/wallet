import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const HomeTabContainer = styled.div``;

export const TransactionsList = styled.ul``;

export const TransactionsItem = styled.li`
  position: relative;
  background-color: ${p => p.theme.colors.white};
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const TransactionsItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid ${p => p.theme.colors.inputBorder};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: ${props =>
      props.type === 'income' ? '#24CCA7' : '#ff6596'};
    width: 7px;
    height: 100%;
  }
`;

export const TransactionsItemText = styled.p`
  font-family: ${p => p.theme.fonts.textBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const TransactionsItemData = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const DelBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
`;

export const DelBtn = styled.button`
  margin-left: 5px;
  border: none;
  background-color: transparent;
`;

export const TrashIcon = styled(BsFillTrashFill)`
  cursor: pointer;
  color: #bdbdbd;
  &:hover {
    fill: #ff6596;
  }
`;
