import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const HomeTabContainer = styled.div`
  height: 312px;
  overflow-y: hidden;
  overflow-y: scroll;

  @media screen and (min-width: 1280px) {
    height: 480px;
    overflow-y: hidden;
    overflow-y: scroll;
  }
`;

export const TitlesTable = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 16px 35px 15px 20px;
    background-color: ${p => p.theme.colors.white};
    border-radius: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const TitleTableText = styled.p`
  font-family: ${p => p.theme.fonts.textBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const TransactionsTableItem = styled.li`
  display: flex;
  align-items: center;
  /* &:not(:last-child) {
    margin-bottom: 10px;
  } */
`;

export const TableItemDataContainer = styled.div`
  flex: 2;
  padding: 10px 0;
`;

export const TableItemTypeContainer = styled.div`
  flex: 1.5;
`;

export const TableItemCategoryContainer = styled.div`
  flex: 2.5;
`;

export const TableItemCommentContainer = styled.div`
  flex: 3;
`;

export const TableItemSumContainer = styled.div`
  flex: 1.5;
  text-align: end;
`;

export const TableItemBalanceContainer = styled.div`
  flex: 1.5;
  text-align: end;
`;

// export const TitlesTableItem = styled.li`
//   width: calc(100% / 6);
//   text-align: center;
// `;

export const DateTableItem = styled.li`
  flex: 2;
`;

export const TypeTableItem = styled.li`
  flex: 1.5;
`;

export const CategoryTableItem = styled.li`
  flex: 2.5;
`;

export const CommentTableItem = styled.li`
  flex: 3;
`;

export const SumTableItem = styled.li`
  flex: 1.5;
  text-align: end;
`;

export const BalanceTableItem = styled.li`
  flex: 1.5;
  text-align: end;
`;

export const TransactionsTable = styled.ul`
  @media screen and (min-width: 768px) {
    padding: 16px 20px 15px;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 715px;
  }
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
