import LogoImage from '../../images/Logo.svg';
import { LogoText, LogoContainer, LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={LogoImage} alt="Logo" />
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};
