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
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  const handleLogoutClick = () => {
    dispatch(logout());
  };

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
            <UserName>{name}</UserName>
            <LogoutButton onClick={handleLogoutClick}>
              <LogoutImg src={Exit} alt="Exit" />
              <Logout>Logout</Logout>
            </LogoutButton>
          </ContainerLogo>
        </HeaderContainer>
      </Container>
    </HeaderSection>
  );
};
