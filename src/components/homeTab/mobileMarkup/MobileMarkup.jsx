import { deleteTransaction } from 'redux/transactions/operations';
import { useDispatch } from 'react-redux';
import {
  HomeTabContainer,
  TransactionsItemWrapper,
  DelBtn,
  TrashIcon,
  TransactionsList,
  TransactionsItem,
  TransactionsItemText,
  TransactionsItemData,
  DelBtnWrapper,
} from './MobileMarkup.styled';

export const MobileMarkup = ({
  transactionsList,
  formatDate,
  updateBalance,
}) => {
  const dispatch = useDispatch();
  return (
    <HomeTabContainer>
      <TransactionsList>
        {transactionsList?.map(transaction => {
          return (
            <TransactionsItem key={transaction._id}>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Date</TransactionsItemText>
                <TransactionsItemData>
                  {formatDate(transaction.date)}
                </TransactionsItemData>
              </TransactionsItemWrapper>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Type</TransactionsItemText>
                <TransactionsItemData>
                  {transaction.type === 'income' ? 'Income' : 'Expense'}
                </TransactionsItemData>
              </TransactionsItemWrapper>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Category</TransactionsItemText>
                <TransactionsItemData>
                  {transaction.category}
                </TransactionsItemData>
              </TransactionsItemWrapper>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Comment</TransactionsItemText>
                <TransactionsItemData>
                  {transaction.comment}
                </TransactionsItemData>
              </TransactionsItemWrapper>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Sum</TransactionsItemText>
                <TransactionsItemData>{transaction.sum}</TransactionsItemData>
              </TransactionsItemWrapper>
              <TransactionsItemWrapper type={transaction.type}>
                <TransactionsItemText>Balance</TransactionsItemText>
                <TransactionsItemData>
                  {transaction.balance.toFixed(2)}
                </TransactionsItemData>
              </TransactionsItemWrapper>
              <DelBtnWrapper>
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
              </DelBtnWrapper>
            </TransactionsItem>
          );
        })}
      </TransactionsList>
    </HomeTabContainer>
  );
};
