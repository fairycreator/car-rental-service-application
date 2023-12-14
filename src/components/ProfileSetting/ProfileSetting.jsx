import { Title, ContentWrapper, Image } from './ProfileSetting.styled';
import settingsPageImage from '../../assets/images/settings-page-image.png';

export const ProfileSetting = () => {
  return (
    <div>
      <Title>Profile setting</Title>
      <ContentWrapper>
        <Image src={`${settingsPageImage}`} />
        <div>Text</div>
      </ContentWrapper>
    </div>
  );
};
