import { useSelector } from 'react-redux';
import { ProfileSetting } from '../components/Settings/ProfileSetting/ProfileSetting';
import { selectIsLoading } from '../redux/monthStatistics/dashboardSelectors';

const SettingsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return <>{isLoading ? <>loading</> : <ProfileSetting />}</>;
};

export default SettingsPage;
