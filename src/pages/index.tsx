import type { NextPage } from 'next';

import Head from 'next/head';
import Link from 'next/link';

import styled, { keyframes } from 'styled-components';
import { colors } from 'styles/colors';

import AppContainer from 'components/AppContainer';
import Header from 'components/Header';
import ProfileButton from 'components/ProfileButton';

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Nextflix</title>
      </Head>

      <Header />

      <Page>
        <Content>
          <Title>Who&apos;s watching?</Title>

          <ProfileList>
            {users.map(user => (
              <li key={user.id}>
                <ProfileButton name={user.name} imageSrc={user.imageUrl} />
              </li>
            ))}
          </ProfileList>

          <PageActions>
            <Link href="/profiles/manage">
              <a>Manage Profiles</a>
            </Link>
          </PageActions>
        </Content>
      </Page>
    </AppContainer>
  );
};

const scaleIn = keyframes`
  from {
    transform: scale(1.2);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Page = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  > ul + div {
    margin-top: 2em;
  }

  animation: ${scaleIn} 0.45s ease forwards;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 3.5vw;

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;

const ProfileList = styled.ul`
  display: flex;

  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  list-style: none;

  max-width: 80%;

  margin-bottom: 2em;

  > li + li {
    margin-left: 2vw;
  }
`;

const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > a {
    text-decoration: none;
  }

  > a,
  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2vw;

    border: 1px solid grey;
    color: grey;

    padding: 0.5em 1.5em;

    letter-spacing: 2px;
    background-color: transparent;

    &:hover {
      border-color: ${colors.text};
      color: ${colors.text};
    }

    @media screen and (max-width: 800px) {
      font-size: 13px;
    }
  }
`;

const users = [
  {
    id: 1,
    name: 'James',
    imageUrl:
      'https://occ-0-876-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFLbhYmC-VG592HgIBaRB7anDaO1A7x3ey4EKX-t0Ty6WNURgO9Hi-Wui8Psoj50BHkpS60dY3cDClt6ADaEsEXhIkw.png?r=fcc',
  },
  {
    id: 2,
    name: 'Mary',
    imageUrl:
      'https://occ-0-876-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFC6l7pcqKJdIX7RCNbBpOxvRnBhCkn1NxSxWM0xScvSvgynXUN-epFc_09AgSWmIC12b8jaVdiCSDV54-J4dHco9MA.png?r=f80',
  },
  {
    id: 3,
    name: 'Robert',
    imageUrl:
      'https://occ-0-876-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFL5ISI6Raw9UGLMFR_JtrOS0FIbrsxOWMb-xRadh2fMkxZ7pxzmXf9URxTYShS3CpYFD2YMZUjxxDaxVo1bi3UD8LQ.png?r=a56',
  },
  {
    id: 4,
    name: 'Jennifer',
    imageUrl:
      'https://occ-0-876-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFGdJrSC6X-MFhn6h4z9IPIzanbCDgImYIFxdRNowBd35CD7O6Ib15zMoqwq7Sw0Ep8oQxK508CH3ZYbdLWFFJFZHSg.png?r=f2f',
  },
  {
    id: 5,
    name: 'Kids',
    imageUrl:
      'https://occ-0-1308-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcLIHTkNuA8jSxuJlbbZppCm90vEXAZ7nMv9P3Uqv0E-ufs9-AbpdXjBF3dF_imIb966YrjBqk-iJc25JoWLtqtqR5B3.png?r=1b8',
  },
];

export default Home;
