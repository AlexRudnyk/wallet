import Media from 'react-media';
import { Navigate, useLocation } from 'react-router-dom';
import {
  TableWrapper,
  TableHeaderContainer,
  TableHeaderList,
  TableHeaderListItem,
  TableBodyContainer,
  TableBodyList,
  TableBodyListItem,
  TableBodyText,
} from './Currency.styled';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Loader } from 'components/loader';
import axios from 'axios';

export const Currency = () => {
  const [status, setStatus] = useState('pending');
  const [currency, setCurrency] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setStatus('pending');
    async function FetchCurrency() {
      try {
        const { data } = await axios('http://localhost:3030/api/currency');

        const result = data.exchangeRate.filter(
          item =>
            item.currency === 'USD' ||
            item.currency === 'EUR' ||
            item.currency === 'GBP' ||
            item.currency === 'PLN' ||
            item.currency === 'CHF'
        );

        setCurrency(result.reverse());
        setStatus('resolve');
      } catch (error) {
        console.log(error.message);
      }
    }
    FetchCurrency();
  }, []);

  return (
    <>
      <Media queries={{ table: { minWidth: 768 } }}>
        {matches =>
          matches.table &&
          pathname !== '/dashboard' &&
          pathname !== '/diagram' && <Navigate to="/dashboard" />
        }
      </Media>
      <Media queries={{ mobile: { minWidth: 320 } }}>
        {matches =>
          matches.mobile &&
          pathname === '/currency' && (
            <TableWrapper>
              <TableHeaderContainer>
                <TableHeaderList>
                  <TableHeaderListItem key={nanoid()}>
                    Currency
                  </TableHeaderListItem>
                  <TableHeaderListItem key={nanoid()}>
                    Purchase
                  </TableHeaderListItem>
                  <TableHeaderListItem key={nanoid()}>Sale</TableHeaderListItem>
                </TableHeaderList>
              </TableHeaderContainer>
              <TableBodyContainer>
                <TableBodyList>
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRate, saleRate }) => {
                      return (
                        <TableBodyListItem key={nanoid()}>
                          <TableBodyText>{currency}</TableBodyText>
                          <TableBodyText>
                            {Number(purchaseRate).toFixed(2)}
                          </TableBodyText>
                          <TableBodyText>
                            {saleRate?.toFixed(2) || '-'}
                          </TableBodyText>
                        </TableBodyListItem>
                      );
                    })}
                  {status === 'pending' && (
                    <Loader color="#e7e5f2" size="15px" />
                  )}
                </TableBodyList>
              </TableBodyContainer>
            </TableWrapper>
          )
        }
      </Media>
      <Media queries={{ tablet: { minWidth: 768 } }}>
        {matches =>
          matches.tablet && (
            <TableWrapper>
              <TableHeaderContainer>
                <TableHeaderList>
                  <TableHeaderListItem>Currency</TableHeaderListItem>
                  <TableHeaderListItem>Purchase</TableHeaderListItem>
                  <TableHeaderListItem>Sale</TableHeaderListItem>
                </TableHeaderList>
              </TableHeaderContainer>
              <TableBodyContainer>
                <TableBodyList>
                  {currency.length > 0 &&
                    currency.map(({ currency, purchaseRate, saleRate }) => {
                      return (
                        <TableBodyListItem key={nanoid()}>
                          <TableBodyText>{currency}</TableBodyText>
                          <TableBodyText>
                            {Number(purchaseRate).toFixed(2)}
                          </TableBodyText>
                          <TableBodyText>
                            {saleRate?.toFixed(2) || '-'}
                          </TableBodyText>
                        </TableBodyListItem>
                      );
                    })}
                  {status === 'pending' && (
                    <Loader color="#e7e5f2" size="45px" />
                  )}
                </TableBodyList>
              </TableBodyContainer>
            </TableWrapper>
          )
        }
      </Media>
    </>
  );
};
