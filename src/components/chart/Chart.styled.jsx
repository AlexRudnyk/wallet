import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 32px;
  margin-top: 43px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 0;
  }
`;

export const Label = styled.h2`
  display: block;
  font-family: ${p => p.theme.fonts.textSecond};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-style: normal;
  font-size: 30px;
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.black};
  margin-bottom: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    width: 336px;
    height: 336px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    width: 288px;
    height: 288px;
  }
`;

export const NotFoundImg = styled.img`
  display: block;
  width: 100%;
`;

export const Text = styled.p`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  font-family: ${p => p.theme.fonts.textBold};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.black};
  z-index: -1;
`;
