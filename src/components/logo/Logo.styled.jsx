import styled from 'styled-components';

export const LogoImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoText = styled.p`
  font-family: ${p => p.theme.fonts.logo};
  font-style: normal;
  /* font-weight: var(--bold); */
  font-size: 26px;
  color: ${p => p.theme.colors.text};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
