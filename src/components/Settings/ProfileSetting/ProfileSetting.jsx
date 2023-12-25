import image from '../../../assets/images/settings-page-image.png';
import {
  PageWrapper,
  Title,
  ContentWrapper,
  Image,
} from './ProfileSetting.styled';
import { ProfileSettingsCard } from '../ProfileSettingsForm/ProfileSettingsCard';

export const ProfileSetting = () => {
  return (
    <PageWrapper>
      <Title>Profile setting</Title>
      <ContentWrapper>
        <Image src={image} alt="Page image" />
        <ProfileSettingsCard />
      </ContentWrapper>
    </PageWrapper>
  );
};
