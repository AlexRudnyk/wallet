import {
  TitlesTable,
  TitleTableText,
  TransactionsTableItem,
} from './HomeTab.styled';

export const HomeTab = ({ transactionsList }) => {
  function formatDate(date) {
    const dateObj = new Date(date);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate() + 1;
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return day + '.' + month + '.' + year;
  }
  return (
    <>
      <TitlesTable>
        <li>
          <TitleTableText>Date</TitleTableText>
        </li>
        <li>
          <TitleTableText>Type</TitleTableText>
        </li>
        <li>
          <TitleTableText>Category</TitleTableText>
        </li>
        <li>
          <TitleTableText>Comment</TitleTableText>
        </li>
        <li>
          <TitleTableText>Sum</TitleTableText>
        </li>
        <li>
          <TitleTableText>Balance</TitleTableText>
        </li>
      </TitlesTable>
      <ul>
        {transactionsList?.map(transaction => {
          return (
            <TransactionsTableItem key={transaction._id}>
              <div>{formatDate(transaction.date)}</div>
              <div>{transaction.type}</div>
              <div>{transaction.category}</div>
              <div>{transaction.comment}</div>
              <div>{transaction.sum}</div>
              <div>{transaction.balance}</div>
            </TransactionsTableItem>
          );
        })}
      </ul>
    </>
  );
};
