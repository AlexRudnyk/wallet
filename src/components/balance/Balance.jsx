import { useLocation } from 'react-router-dom';
import {
  ContainerBalance,
  BalanceTitle,
  BalanceInWallet,
  IconInBalance,
  BalanceMain,
} from './Balance.styled';
import Media from 'react-media';

export const Balance = ({ balance }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/dashboard' && (
        <ContainerBalance>
          <BalanceTitle>your balance</BalanceTitle>
          <BalanceInWallet>
            <IconInBalance>₴ </IconInBalance>
            <BalanceMain>{balance}</BalanceMain>
          </BalanceInWallet>
        </ContainerBalance>
      )}
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet &&
          pathname === '/diagram' && (
            <ContainerBalance>
              <BalanceTitle>your balance</BalanceTitle>

              <BalanceInWallet>
                <IconInBalance>₴ </IconInBalance>
                <BalanceMain>{balance}</BalanceMain>
              </BalanceInWallet>
            </ContainerBalance>
          )
        }
      </Media>
    </>
  );
};
