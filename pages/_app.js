import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%
  }
  body {
    padding: 0;
    margin: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
