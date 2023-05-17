import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transactions/operations';
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
} from './HomeTab.styled';
import axios from 'axios';
import { setBalance } from 'redux/auth/slice';

export const HomeTab = ({ transactionsList }) => {
  const dispatch = useDispatch();

  function formatDate(date) {
    const dateToObj = new Date(date);
    const formatedDate = dateToObj.toLocaleDateString();
    return formatedDate;
  }

  const updateBalance = async () => {
    try {
      const { data } = await axios.get(
        'http://localhost:3030/api/users/balance'
      );
      dispatch(setBalance(data));
    } catch (error) {
      console.log(error.message);
    }
  };

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
