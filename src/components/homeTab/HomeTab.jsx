import {
  TitlesTable,
  TitleTableText,
  TransactionsTableItem,
  TransactionsTable,
  TransactionsTableItemContainer,
  TitlesTableItem,
} from './HomeTab.styled';

export const HomeTab = ({ transactionsList }) => {
  function formatDate(date) {
    const dateObj = new Date(date);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let day = dateObj.getDate();
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return day + '.' + month + '.' + year.toString().substr(-2);
  }
  return (
    <>
      <TitlesTable>
        <TitlesTableItem>
          <TitleTableText>Date</TitleTableText>
        </TitlesTableItem>
        <TitlesTableItem>
          <TitleTableText>Type</TitleTableText>
        </TitlesTableItem>
        <TitlesTableItem>
          <TitleTableText>Category</TitleTableText>
        </TitlesTableItem>
        <TitlesTableItem>
          <TitleTableText>Comment</TitleTableText>
        </TitlesTableItem>
        <TitlesTableItem>
          <TitleTableText>Sum</TitleTableText>
        </TitlesTableItem>
        <TitlesTableItem>
          <TitleTableText>Balance</TitleTableText>
        </TitlesTableItem>
      </TitlesTable>
      <TransactionsTable>
        {transactionsList?.map(transaction => {
          return (
            <TransactionsTableItem key={transaction._id}>
              <TransactionsTableItemContainer>
                {formatDate(transaction.date)}
              </TransactionsTableItemContainer>
              <TransactionsTableItemContainer>
                {transaction.type}
              </TransactionsTableItemContainer>
              <TransactionsTableItemContainer>
                {transaction.category}
              </TransactionsTableItemContainer>
              <TransactionsTableItemContainer>
                {transaction.comment}
              </TransactionsTableItemContainer>
              <TransactionsTableItemContainer>
                {transaction.sum}
              </TransactionsTableItemContainer>
              <TransactionsTableItemContainer>
                {transaction.balance}
              </TransactionsTableItemContainer>
            </TransactionsTableItem>
          );
        })}
      </TransactionsTable>
    </>
  );
};
