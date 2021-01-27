import Head from 'next/head';
import Link from 'next/link';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Axiomatic Design Systems</title>
        <link rel="icon" href="/axiomatic-favicon.png" />
      </Head>
      <Link href="/">Homie</Link>
      <Link href="/articles">All Articles</Link>
      <Component {...pageProps} />
    </>
  );
}

export default App;
