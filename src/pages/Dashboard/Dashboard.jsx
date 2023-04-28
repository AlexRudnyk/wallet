import { Container } from 'globalStyles/globalStyle';
import { Header } from 'components/header';
import { useLocation } from 'react-router-dom';
import {
  Main,
  DashboardWrapper,
  DashboardFirstWrapper,
  DashboardSeparator,
  DashboardSecondWrapper,
} from './Dashboard.styled';
import Media from 'react-media';
import { Navigation } from 'components/navigation';
import { Balance } from 'components/balance';
import { Currency } from 'components/currency';
import { useState } from 'react';

export const Dashboard = () => {
  // const [transactions, setTransactions] = useState([]);
  // const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
  useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Main pathname={pathname}>
        <Container>
          <DashboardWrapper>
            <DashboardFirstWrapper>
              <div>
                <Navigation />
                <Balance />
                <Media queries={{ mobile: { maxWidth: 767 } }}>
                  {matches =>
                    matches.mobile && (
                      <div>
                        <Currency />
                      </div>
                    )
                  }
                </Media>
              </div>
              <Media queries={{ table: { minWidth: 768 } }}>
                {matches =>
                  matches.table && (
                    <div>
                      <Currency />
                    </div>
                  )
                }
              </Media>
            </DashboardFirstWrapper>
            <DashboardSeparator pathname={pathname} />
            <DashboardSecondWrapper>
              {/* {pathname === '/diagram' && <DiagramTab />}
              {pathname === '/dashboard' && (
                <>
                  <HomeTab transactionsList={transactions} />
                  <ButtonAddTransactions />
                </>
              )} */}
            </DashboardSecondWrapper>
          </DashboardWrapper>
          {/* {isModalAddTransactionOpen && <ModalAddTransactions />} */}
        </Container>
      </Main>
    </>
  );
};
