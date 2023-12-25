import { useSelector } from 'react-redux';
import { ProfileSetting } from '../components/Settings/ProfileSetting/ProfileSetting';
import { selectIsLoading } from '../redux/monthStatistics/dashboardSelectors';
import { Loader } from '../helpers/Loader';

const SettingsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return <>{isLoading ? Loader : <ProfileSetting />}</>;
};

export default SettingsPage;
