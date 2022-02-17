import { Container, Name, UserImage } from './styles';

interface ProfileButtonProps {
  name: string;
  imageSrc: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ name, imageSrc }) => (
  <Container>
    <UserImage src={imageSrc} alt={name} />

    <Name>{name}</Name>
  </Container>
);

export default ProfileButton;
