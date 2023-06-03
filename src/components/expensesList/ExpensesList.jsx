import {
  ExpensesContainer,
  ExpensesTitlesTable,
  ExpensesTitlesItem,
  TitleTableText,
  ExpensesTable,
  ExpensesTableItem,
  ExpensesItemWrapper,
  ExpensesColor,
  TableText,
  SummaryTable,
  SummaryWrapper,
  SummaryText,
  SummaryExpNumber,
  SummaryIncNumber,
} from './ExpensesList.styled';

export const ExpensesList = ({
  tableCategories = [],
  tableExpenseSum = 0,
  tableIncomeSum = 0,
}) => {
  return (
    <ExpensesContainer>
      <ExpensesTitlesTable>
        <ExpensesTitlesItem>
          <TitleTableText>Category</TitleTableText>
        </ExpensesTitlesItem>
        <ExpensesTitlesItem>
          <TitleTableText>Sum</TitleTableText>
        </ExpensesTitlesItem>
      </ExpensesTitlesTable>
      <ExpensesTable>
        {tableCategories?.map(
          ({ categoryColor, categoryName, categorySum }) => {
            return (
              <ExpensesTableItem key={categoryName}>
                <ExpensesItemWrapper>
                  <ExpensesColor
                    style={{ backgroundColor: `${categoryColor}` }}
                  ></ExpensesColor>
                  <TableText>{categoryName}</TableText>
                </ExpensesItemWrapper>
                <div>{categorySum.toFixed(2)}</div>
              </ExpensesTableItem>
            );
          }
        )}
      </ExpensesTable>
      <SummaryTable>
        <SummaryWrapper>
          <SummaryText>Expenses:</SummaryText>
          <SummaryExpNumber>{tableExpenseSum}</SummaryExpNumber>
        </SummaryWrapper>
        <SummaryWrapper>
          <SummaryText>Income:</SummaryText>
          <SummaryIncNumber>{tableIncomeSum}</SummaryIncNumber>
        </SummaryWrapper>
      </SummaryTable>
    </ExpensesContainer>
  );
};
