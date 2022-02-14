import AppContainer from 'components/AppContainer';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>Welcome Next.js</div>
      </main>
    </AppContainer>
  );
};

export default Home;
