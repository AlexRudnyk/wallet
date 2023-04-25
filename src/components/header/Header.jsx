import { Container } from 'globalStyles/globalStyle';
import {
  HeaderSection,
  HeaderContainer,
  ContainerLogo,
  StyledLogo,
  LogoName,
  UserName,
  LogoutButton,
  Logout,
  LogoutImg,
} from './Header.styled';
import Logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';
import Exit from '../../images/Exit.svg';
import { useState } from 'react';

export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <HeaderSection>
      <Container>
        <HeaderContainer>
          <ContainerLogo>
            <NavLink to="/dashboard">
              <ContainerLogo>
                <StyledLogo src={Logo} alt="logo" />
                <LogoName>Wallet</LogoName>
              </ContainerLogo>
            </NavLink>
          </ContainerLogo>
          <ContainerLogo>
            <UserName>UserName</UserName>
            <LogoutButton onClick={() => setShow(!show)}>
              <LogoutImg src={Exit} alt="Exit" />
              <Logout>Logout</Logout>
            </LogoutButton>
          </ContainerLogo>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
