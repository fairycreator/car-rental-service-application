import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import { Header } from "./components/Header/Header";
import { selectLoading } from "./redux/selectors";

const Home = lazy(() => import("./pages/Homepage"));
const Catalog = lazy(() => import("./pages/CatalogPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));

export const App = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
      {isLoading && <Loader />}
    </>
  );
};
