import styled from 'styled-components';

export const TitlesTable = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 16px 20px 15px;
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
`;

export const TransactionsTableItemContainer = styled.div`
  width: calc(100% / 6);
  text-align: center;
`;

export const TitlesTableItem = styled.li`
  width: calc(100% / 6);
  text-align: center;
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
