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
import { ModalAddTransactions } from 'components/modalAddTransactions';
import { useDispatch } from 'react-redux';
import { addTransaction, getTransactions } from 'redux/transactions/operations';
import { setBalance } from 'redux/auth/slice';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/transactions/selectors';
import { selectUser } from 'redux/auth/selectors';
import { DiagramTab } from 'components/diagramTab';

export const Dashboard = () => {
  const stateTransactions = useSelector(selectTransactions);
  const [transactions, setTransactions] = useState([]);
  const { balance } = useSelector(selectUser);
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  useEffect(() => {
    if (stateTransactions !== undefined && stateTransactions.length > 0) {
      const sortedTransactions = [...stateTransactions].sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        return Number(date2) - Number(date1);
      });
      const arr = [];
      sortedTransactions.reverse().reduce((previousValue, item) => {
        const newItem = {
          ...item,
          balance:
            item.type === 'expense'
              ? previousValue - item.sum
              : previousValue + item.sum,
        };
        arr.push(newItem);
        return item.type === 'expense'
          ? previousValue - item.sum
          : previousValue + item.sum;
      }, 0);
      if (stateTransactions && arr.length === stateTransactions.length) {
        dispatch(setBalance(arr[arr.length - 1].balance));
        setTransactions(arr.reverse());
      }
    } else {
      setTransactions([]);
      dispatch(setBalance(0));
    }
  }, [dispatch, stateTransactions]);

  const handleOnAddTransctionButtonClick = e => {
    e.preventDefault();
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const handleModalClose = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  const handleSubmit = values => {
    dispatch(addTransaction(values));
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
              {pathname === '/diagram' && <DiagramTab />}
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
