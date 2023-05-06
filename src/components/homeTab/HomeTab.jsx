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
            </TransactionsTableItem>
          );
        })}
      </TransactionsTable>
    </>
  );
};
