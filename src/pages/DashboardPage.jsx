import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { selectError, selectIsLoading} from "../redux/dashboard/dashboardSelectors";
import { getMonthStatistics } from "../redux/dashboard/dashboardOperations";
import { useEffect } from "react";


const DashboardPage = () => {
     const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);
   

     useEffect(() => {
       dispatch(getMonthStatistics());
     }, [dispatch]);

   return (
     <div>
       {isLoading ? (
         // <Loader />
         <p>Oops! Loading.....</p>
       ) : (
         !error && <Dashboard />
       )}
       {error && !isLoading && <p>Oops! Something went wrong!</p>}
     </div>
   );
};

export default DashboardPage;
