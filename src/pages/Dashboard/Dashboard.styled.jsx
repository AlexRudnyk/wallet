import styled from 'styled-components';

export const Main = styled.main`
  height: 100vh;
  padding-top: 75px;
  padding-bottom: 15px;
  @media screen and (min-width: 768px) {
    padding-top: 112px;
    padding-bottom: ${p => p.theme.space[5]}px;
    height: ${props => (props.pathname === '/dashboard' ? '100vh' : '100%')};
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
  height: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;
