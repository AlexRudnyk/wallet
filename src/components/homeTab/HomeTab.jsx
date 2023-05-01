import {
  TitlesTable,
  TitleTableText,
  TransactionsTableItem,
} from './HomeTab.styled';

export const HomeTab = ({ transactionsList }) => {
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
        {transactionsList.map(transaction => {
          return (
            <TransactionsTableItem key={transaction._id}>
              <div>Date</div>
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
