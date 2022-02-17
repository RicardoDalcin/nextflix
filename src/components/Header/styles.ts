import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;

  top: 0;
  left: 0;

  height: 41px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 4%;

  font-size: 1.2rem;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );

  @media screen and (min-width: 950px) {
    height: 68px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1500px) {
    padding: 0 60px;
  }
`;

export const Logo = styled.img`
  height: 15px;

  @media screen and (min-width: 650px) {
    height: 20px;
  }

  @media screen and (min-width: 950px) {
    height: 25px;
  }
`;
