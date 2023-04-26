import { Container } from 'globalStyles/globalStyle';
import { Header } from 'components/header';
import { useLocation } from 'react-router-dom';
import {
  Main,
  DashboardWrapper,
  DashboardFirstWrapper,
} from './Dashboard.styled';
import Media from 'react-media';
import { Navigation } from 'components/navigation';
import { Balance } from 'components/balance';

export const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Header />
      <Main pathname={pathname}>
        <Container>
          <DashboardWrapper>
            <DashboardFirstWrapper>
              <div>
                <Navigation />
                <Balance />
                <Media queries={{ mobile: { maxWidth: 767 } }}>
                  {matches => matches.mobile && <div>{/* <Currency /> */}</div>}
                </Media>
              </div>
            </DashboardFirstWrapper>
          </DashboardWrapper>
        </Container>
      </Main>
    </Container>
  );
};
