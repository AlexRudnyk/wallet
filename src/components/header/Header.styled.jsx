import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(1) {
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      height: 40px;
    }
  }
`;

export const StyledLogo = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 30px;

    margin-right: 30px;
  }
`;

export const LogoName = styled.h1`
  font-family: ${p => p.theme.fonts.logo};
  font-style: normal;
  font-size: 22px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const UserName = styled.p`
  font-family: ${p => p.theme.fonts.text};
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 27px;
  text-align: right;
  color: ${p => p.theme.colors.inputTxt};
  margin-right: ${p => p.theme.space[3]}px;
  @media screen and (min-width: 768px) {
    margin-right: 0px;
    &::after {
      content: '';
      height: 30px;
      border: 1px solid ${p => p.theme.colors.inputTxt};
      margin-left: 12px;
      margin-right: 12px;
    }
  }
`;

export const LogoutImg = styled.img`
  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: inherit;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const Logout = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: ${p => p.theme.fonts.text};
    font-style: normal;
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 27px;
    color: ${p => p.theme.colors.inputTxt};
    margin-left: ${p => p.theme.space[3]}px;
  }
`;
