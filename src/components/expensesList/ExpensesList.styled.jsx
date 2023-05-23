import styled from 'styled-components';

export const ExpensesContainer = styled.div`
  /* height: 100%; */
`;

export const ExpensesTitlesTable = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 280px;
  padding: 16px 28px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const ExpensesTitlesItem = styled.li``;

export const TitleTableText = styled.p`
  font-family: ${p => p.theme.fonts.textBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const ExpensesTable = styled.ul``;

export const ExpensesTableItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid ${p => p.theme.colors.inputBorder};
`;

export const TableText = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const ExpensesItemWrapper = styled.div`
  display: flex;
`;

export const ExpensesColor = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`;

export const SummaryTable = styled.div`
  padding: 16px 20px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const SummaryText = styled.p`
  font-family: ${p => p.theme.fonts.textBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.lineHeights.text};
`;

export const SummaryExpNumber = styled(SummaryText)`
  color: #ff6596;
`;

export const SummaryIncNumber = styled(SummaryText)`
  color: #24cca7;
`;
