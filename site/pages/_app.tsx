import Head from 'next/head';
import { useRouter } from 'next/router';
import { theme, ThemeProvider, GlobalStyle } from '@axiomatic/react-components';
import { Header, Footer } from '../components';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Axiomatic Design Systems</title>
        <link rel="icon" href="/axiomatic-favicon.png" />
      </Head>
      <Header starCount="1,224" />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
