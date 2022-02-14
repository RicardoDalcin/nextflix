import { global as GlobalStyles } from 'styles/global';
import { reset as CSSReset } from 'styles/reset';
import { Container } from './styles';

const AppContainer: React.FC = ({ children }) => (
  <>
    <CSSReset />
    <GlobalStyles />

    <Container data-testid="AppContainer" id="container">
      {children}
    </Container>
  </>
);

export default AppContainer;
