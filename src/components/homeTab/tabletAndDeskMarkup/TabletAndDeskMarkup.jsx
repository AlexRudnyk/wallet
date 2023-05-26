import { deleteTransaction } from 'redux/transactions/operations';
import { useDispatch } from 'react-redux';
import {
  TitlesTable,
  TitleTableText,
  TransactionsTableItem,
  TransactionsTable,
  DateTableItem,
  TypeTableItem,
  CategoryTableItem,
  CommentTableItem,
  SumTableItem,
  BalanceTableItem,
  TableItemDataContainer,
  TableItemTypeContainer,
  TableItemCategoryContainer,
  TableItemCommentContainer,
  TableItemSumContainer,
  TableItemBalanceContainer,
  HomeTabContainer,
  DelBtn,
  TrashIcon,
} from './TabletAndDeskMarkup.styled';

export const TabletAndDeskMarkup = ({
  transactionsList,
  formatDate,
  updateBalance,
}) => {
  const dispatch = useDispatch();
  return (
    <HomeTabContainer>
      <TitlesTable>
        <DateTableItem>
          <TitleTableText>Date</TitleTableText>
        </DateTableItem>
        <TypeTableItem>
          <TitleTableText>Type</TitleTableText>
        </TypeTableItem>
        <CategoryTableItem>
          <TitleTableText>Category</TitleTableText>
        </CategoryTableItem>
        <CommentTableItem>
          <TitleTableText>Comment</TitleTableText>
        </CommentTableItem>
        <SumTableItem>
          <TitleTableText>Sum</TitleTableText>
        </SumTableItem>
        <BalanceTableItem>
          <TitleTableText>Balance</TitleTableText>
        </BalanceTableItem>
      </TitlesTable>
      <TransactionsTable>
        {transactionsList?.map(transaction => {
          return (
            <TransactionsTableItem key={transaction._id}>
              <TableItemDataContainer>
                {formatDate(transaction.date)}
              </TableItemDataContainer>
              <TableItemTypeContainer>
                {transaction.type === 'income' ? '+' : '–'}
              </TableItemTypeContainer>
              <TableItemCategoryContainer>
                {transaction.category}
              </TableItemCategoryContainer>
              <TableItemCommentContainer>
                {transaction.comment}
              </TableItemCommentContainer>
              <TableItemSumContainer>{transaction.sum}</TableItemSumContainer>
              <TableItemBalanceContainer>
                {transaction.balance}
              </TableItemBalanceContainer>
              <DelBtn
                type="button"
                onClick={() => {
                  dispatch(deleteTransaction(transaction._id)).then(() =>
                    updateBalance()
                  );
                }}
              >
                <TrashIcon />
              </DelBtn>
            </TransactionsTableItem>
          );
        })}
      </TransactionsTable>
    </HomeTabContainer>
  );
};
