import { useSelector } from 'react-redux';
import { ProfileSetting } from '../components/Settings/ProfileSetting/ProfileSetting';
import { selectIsLoading } from '../redux/monthStatistics/dashboardSelectors';
import PuffLoader from 'react-spinners/PuffLoader';

const SettingsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <PuffLoader
          color="var(--primary-color-green-lite)"
          cssOverride={{ margin: '40vh auto 0 auto' }}
        />
      ) : (
        <ProfileSetting />
      )}
    </>
  );
};

export default SettingsPage;
