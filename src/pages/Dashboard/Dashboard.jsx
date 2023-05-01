import { Container } from 'globalStyles/globalStyle';
import { Header } from 'components/header';
import { useLocation } from 'react-router-dom';
import {
  Main,
  DashboardWrapper,
  DashboardFirstWrapper,
  DashboardSeparator,
  DashboardSecondWrapper,
  ButtonAddTransactions,
  SwitchElVert,
  SwitchElGor,
} from './Dashboard.styled';
import Media from 'react-media';
import { Navigation } from 'components/navigation';
import { Balance } from 'components/balance';
import { Currency } from 'components/currency';
import { HomeTab } from 'components/homeTab';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ModalAddTransactions } from 'components/modalAddTransactions';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectTransactions } from 'redux/transactions/selectors';
// import { getTransactions } from 'redux/transactions/operations';

export const Dashboard = () => {
  // const transactions = useSelector(selectTransactions);
  const [transactions, setTransactions] = useState([]);
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);
  const { pathname } = useLocation();
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTransactions());
    async function getTransactions() {
      try {
        const { data } = await axios.get(
          'http://localhost:3030/api/transactions'
        );
        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    }
    getTransactions();
  }, []);

  const handleOnAddTransctionButtonClick = e => {
    e.preventDefault();
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const handleModalClose = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

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
              {/* {pathname === '/diagram' && <DiagramTab />} */}
              {pathname === '/dashboard' && (
                <>
                  <HomeTab transactionsList={transactions} />
                  <ButtonAddTransactions
                    type="button"
                    onClick={handleOnAddTransctionButtonClick}
                  >
                    <SwitchElVert />
                    <SwitchElGor />
                  </ButtonAddTransactions>
                </>
              )}
            </DashboardSecondWrapper>
          </DashboardWrapper>
          {isModalAddTransactionOpen && (
            <ModalAddTransactions onClose={handleModalClose} />
          )}
        </Container>
      </Main>
    </>
  );
};
