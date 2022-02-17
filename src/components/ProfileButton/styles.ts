import styled from 'styled-components';
import { colors } from 'styles/colors';

export const UserImage = styled.img`
  height: 10vw;
  width: 10vw;

  max-height: 200px;
  max-width: 200px;

  min-height: 84px;
  min-width: 84px;

  border-radius: 4px;
`;

export const Name = styled.p`
  line-height: 1.2em;
  min-height: 1.8em;
  font-size: 1.3vw;

  color: grey;

  margin: 0.6em 0;

  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;

    ${UserImage} {
      outline: 3px solid ${colors.text};
      outline-offset: -3px;
    }

    ${Name} {
      color: ${colors.text};
    }
  }
`;
