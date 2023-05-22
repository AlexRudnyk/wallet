import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const DiagramTabWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const DiagramTableBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 280px;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    //margin-top: 11px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-top: 56px;
  }
`;

export const DiagramButtonsWrapper = styled.div``;

export const Select = styled.select`
  width: 181px;
  height: 50px;
  padding: 12px 20px;
  background-color: transparent;
  border: 1px solid ${p => p.theme.colors.black};
  border-radius: 30px;
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes[2]};
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 395px;
`;
