import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/operations";
import {
  selectAmountCars,
  selectFilteredCars,
  selectLoading,
} from "../../redux/selectors";
import { CatalogPage } from "./CatalogPage.styled";
import { advertsList } from "../../redux/advertSlice";
import { clearFilter } from "../../redux/filterSlice";
import { CarsList } from "../../components/CarsList/CarsList";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Button } from "../../components/Button/Button";
// import { NotFound } from "../../components/NotFound/NotFound";

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const amount = useSelector(selectAmountCars);
  const filteredCars = useSelector(selectFilteredCars);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (page === 1) {
      dispatch(advertsList());
      dispatch(clearFilter());
    }

    dispatch(fetchCars({ page, limit: 16 }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  const renderCarsList = () => {
    if (filteredCars.length > 0) {
      return <CarsList cars={filteredCars} />;
    }
    return isLoading ? <p>Loading...</p> : <p>No cars found.</p>;
  };

  const renderLoadMoreButton = () => {
    if (amount < 32) {
      return <Button onClick={handleLoadMore}>Load More</Button>;
    }
    return null;
  };
  return (
    <>
      <CatalogPage>
        <SearchForm />
        {renderCarsList()}
        {renderLoadMoreButton()}
      </CatalogPage>
    </>
  );
};

export default Catalog;
