import styled from 'styled-components';
import eclipseGray from '../../images/EllipseGray.png';
import eclipsePink from '../../images/EllipsePink.png';
import RegImage from '../../images/RegistrationPageImage.png';
import RegImageTab from '../../images/RegistrationPageImage_tablet.png';
import LoginImage from '../../images/loginPageImage_desktop.png';
import LoginImageTab from '../../images/loginPageImage_tablet.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  padding: 0;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0px;
  justify-content: center;
  left: 0px;
  background-color: ${p => p.theme.colors.white};

  @media (max-width: 767px) {
    position: fixed;
  }

  @media (min-width: 768px) {
    background-color: ${p => p.theme.colors.background};
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding: 60px 114px 48px;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    height: 100vh;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0;
    min-height: 720px;
  }
`;

export const ImageSection = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin-bottom: 50px;
    width: 540px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const ImageContainerLog = styled.div`
  @media (min-width: 768px) {
    background-image: url(${LoginImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 260px;
  }

  @media (min-width: 1280px) {
    background-image: url(${LoginImage});
    width: 435px;
    height: 419px;
    margin-right: 38px;
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const ImageContainerReg = styled.div`
  @media (min-width: 768px) {
    background-image: url(${RegImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 274px;
  }

  @media (min-width: 1280px) {
    background-image: url(${RegImage});
    width: 452px;
    height: 412px;
    margin-bottom: ${p => p.theme.space[5]}px;
    margin-right: ${p => p.theme.space[5]}px;
  }
`;
export const Text = styled.p`
  @media (min-width: 768px) {
    color: ${p => p.theme.colors.black};
    display: flex;
    margin-right: auto;
    font-family: ${p => p.theme.fonts.textSecond};
    font-size: 30px;
    line-height: ${p => p.theme.lineHeights.logo};
    margin-left: 40px;
    align-items: center;
  }
  @media (min-width: 1280px) {
    margin-left: auto;
    width: 187px;
  }
`;

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 767px) {
    height: 100vh;
  }
  @media (min-width: 1280px) {
    width: 57%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0.4);
    backdrop-filter: blur(50px);
  }
`;

export const FormContainerLogin = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.colors.white};
  height: 354px;
  width: 320px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 468px;
    padding: 40px 65px 60px;
    border-radius: ${p => p.theme.radii.small};
    margin-right: auto;
    margin-left: auto;
  }
`;

export const FormContainerRegsiter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.colors.white};
  height: 354px;
  width: 320px;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    width: 533px;
    height: 616px;
    padding: 40px 65px 60px;
    border-radius: ${p => p.theme.radii.small};
    margin-right: auto;
    margin-left: auto;
  }
`;

export const LogoContainer = styled.div``;
