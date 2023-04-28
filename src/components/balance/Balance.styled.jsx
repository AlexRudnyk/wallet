import styled from 'styled-components';

export const ContainerBalance = styled.div`
  background: ${p => p.theme.colors.white};
  border-radius: 30px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: 11px;
  padding-left: ${p => p.theme.space[5]}px;
  text-align: start;
  margin-top: 15px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    display: block;
    width: 336px;
    padding-left: 40px;
    margin-bottom: 20px;
    margin-top: 28px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const BalanceTitle = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: ${p => p.theme.lineHeights.logo};
  text-transform: uppercase;
  color: ${p => p.theme.colors.textBalance};
`;

export const BalanceInWallet = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  /* overflow-x: scroll; */
  &::-webkit-scrollbar {
    height: 0;
  }
  & > p:first-child {
    margin-right: 5px;
  }
`;

export const IconInBalance = styled.div`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: 30px;
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.black};
`;

export const BalanceMain = styled.p`
  font-family: ${p => p.theme.fonts.logo};
  font-style: normal;
  font-size: 30px;
  line-height: ${p => p.theme.lineHeights.logo};
  ${p => p.theme.colors.black};
`;
