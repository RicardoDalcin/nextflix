import Head from 'next/head';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        <link rel="icon" type="image/icon" sizes="16x16" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
