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
import { useDispatch } from 'react-redux';
import { addTransaction, getTransactions } from 'redux/transactions/operations';
import { setBalance } from 'redux/auth/slice';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { selectUser } from 'redux/auth/selectors';

export const Dashboard = () => {
  const transactions = useSelector(selectTransactions);
  const { balance } = useSelector(selectUser);
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const handleOnAddTransctionButtonClick = e => {
    e.preventDefault();
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const handleModalClose = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const handleSubmit = values => {
    dispatch(addTransaction(values));
    async function getBalance() {
      try {
        const { data } = await axios.get(
          'http://localhost:3030/api/users/balance'
        );
        dispatch(setBalance(data));
      } catch (error) {
        console.log(error.message);
      }
    }
    getBalance();
  };

  const sortedTransactions = [...transactions].reverse();

  return (
    <>
      <Header />
      <Main pathname={pathname}>
        <Container>
          <DashboardWrapper>
            <DashboardFirstWrapper>
              <div>
                <Navigation />
                <Balance balance={balance} />
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
                  <HomeTab transactionsList={sortedTransactions} />
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
            <ModalAddTransactions
              onClose={handleModalClose}
              onSubmit={handleSubmit}
            />
          )}
        </Container>
      </Main>
    </>
  );
};
