import { LoginForm } from 'components/form';
import Media from 'react-media';
import { Logo } from '../../components/logo';

import {
  ContainerPage,
  FormContainerLogin,
  ImageContainerLog,
  Text,
  ImageSection,
  Container,
  FormWrapper,
  LogoContainer,
} from './AuthPage.styled';

export const LoginPage = () => {
  return (
    <Container>
      <ContainerPage>
        <Media
          query="(min-width: 768px)"
          render={() => (
            <ImageSection>
              <ImageContainerLog />
              <Text>Finance App</Text>
            </ImageSection>
          )}
        />
        <FormWrapper>
          <FormContainerLogin>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <LoginForm />
          </FormContainerLogin>
        </FormWrapper>
      </ContainerPage>
    </Container>
  );
};
