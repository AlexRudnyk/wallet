import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  padding-top: 75px;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 112px;
    padding-bottom: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 126px;
    padding-bottom: 103px;
  }
`;

export const DashboardWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const DashboardFirstWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DashboardSeparator = styled.div`
  @media screen and (min-width: 1280px) {
    margin-left: 69px;
    margin-right: 89px;
    margin-top: -47px;
    margin-bottom: ${({ pathname }) =>
      pathname === '/dashboard' ? '-83px' : '-103px'};
    border: 1px solid ${p => p.theme.colors.vectorColor};
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const DashboardSecondWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonAddTransactions = styled.button`
  position: fixed;
  bottom: 40px;
  right: 30px;
  border-radius: ${p => p.theme.radii.big};
  border: none;
  width: 44px;
  height: 44px;

  background: ${p => p.theme.colors.accent};

  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  cursor: pointer;
`;

export const SwitchElGor = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  top: 12px;
  left: 21px;
`;

export const SwitchElVert = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  left: 12px;
  top: 21px;
`;

export const CurrencyWrapper = styled.div`
  margin-left: 32px;

  @media screen and (min-width: 1280px) {
    margin-left: 0;
  }
`;
