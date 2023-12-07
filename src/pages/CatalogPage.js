import React, { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import Filters from "../components/Filters";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../redux/advertsSlice";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [selectedMake, setSelectedMake] = useState("");
  const cars = useSelector((state) => state.adverts.items);
  const makes = useSelector((state) => state.adverts.makes);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleMakeSelect = (make) => {
    setSelectedMake(make);
  };

  const filteredCars = cars.filter((car) => {
    return selectedMake ? car.make === selectedMake : true;
  });

  return (
    <div>
      <Filters
        makes={makes}
        selectedMake={selectedMake}
        onMakeSelect={handleMakeSelect}
      />
      <div className="car-cards-container">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      {/* Тут буде компонент для пагінації */}
    </div>
  );
};

export default CatalogPage;
