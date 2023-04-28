import styled from 'styled-components';
import Line from '../../images/line-currency-min.png';

export const TableWrapper = styled.div`
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    position: relative;
    display: block;
    width: 336px;
    margin-top: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 393px;
  }
`;

export const TableHeaderContainer = styled.div`
  background: ${p => p.theme.colors.notActiveLink};
  padding: 11px 20px 12px 20px;
  border-radius: 30px 30px 0px 0px;
  @media screen and (min-width: 1280px) {
    padding: 17px 64px 16px 44px;
  }
`;

export const TableHeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderListItem = styled.li`
  font-family: ${p => p.theme.fonts.textBold};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 27px;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const TableBodyContainer = styled.div`
  background: ${p => p.theme.colors.activeBlue};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 12px 15px 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding: 16px 15px 12px 20px;
  }
  @media screen and (min-width: 1280px) {
    height: 282px;
  }
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) -8.67%,
      rgba(255, 255, 255, 0) 116.22%
    ),
    url(${Line});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

export const TableBodyList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 124px;
  overflow-y: hidden;
  overflow-y: scroll;
  width: 260px;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (min-width: 768px) {
    width: 310px;
    height: 111px;
  }
  @media screen and (min-width: 1280px) {
    width: 290px;
    height: 270px;
  }
`;

export const TableBodyListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 240px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1280px) {
    width: 269px;
  }
`;

export const TableBodyText = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[2]};
  line-height: ${p => p.theme.lineHeights.logo};

  width: 36px;
  height: 24px;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[6]}px;
  }

  color: ${p => p.theme.colors.white};
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    &:not(:last-child) {
      margin-right: 95px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;
