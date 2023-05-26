import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setBalance } from 'redux/auth/slice';
import { TabletAndDeskMarkup } from './tabletAndDeskMarkup';
import Media from 'react-media';
import { Text } from './HomeTab.styled';
import { MobileMarkup } from './mobileMarkup';

export const HomeTab = ({ transactionsList }) => {
  const dispatch = useDispatch();

  function formatDate(date) {
    const dateToObj = new Date(date);
    const formatedDate = dateToObj.toLocaleDateString();
    return formatedDate;
  }

  const updateBalance = async () => {
    try {
      const { data } = await axios.get(
        'https://wallet-backend-h68t.vercel.app/api/users/balance'
      );
      dispatch(setBalance(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Media queries={{ mobile: { maxWidth: 767.98 } }}>
      {matches =>
        matches.mobile ? (
          transactionsList.length === 0 ? (
            <Text>There are no transactions yet</Text>
          ) : (
            <MobileMarkup
              transactionsList={transactionsList}
              formatDate={formatDate}
              updateBalance={updateBalance}
            />
          )
        ) : transactionsList.length === 0 ? (
          <Text>There are no transactions yet</Text>
        ) : (
          <TabletAndDeskMarkup
            transactionsList={transactionsList}
            formatDate={formatDate}
            updateBalance={updateBalance}
          />
        )
      }
    </Media>
  );
};
