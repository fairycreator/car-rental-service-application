import { Title, ContentWrapper, Image } from './ProfileSetting.styled';
import sprite from '../../assets/images/sprite.svg';

export const ProfileSetting = () => {
  return (
    <div>
      <Title>Profile setting</Title>
      <ContentWrapper>
        <Image>
          <use href={`${sprite}#icon-settings-page-image`} />
        </Image>
        <div>Text</div>
      </ContentWrapper>
    </div>
  );
};
