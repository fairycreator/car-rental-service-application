import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/advertSlice";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const { id, make, model, year, price, mileage, image } = car;

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="car-card">
      <img src={image} alt={`${make} ${model}`} />
      <h3>{`${make} ${model}, ${year}`}</h3>
      <p>{`$${price}/hour`}</p>
      <p>{`Mileage: ${mileage.toLocaleString()} km`}</p>
      <button onClick={handleFavoriteClick}>
        {car.isFavorite ? "❤️" : "♡"}
      </button>
      <button>Learn more</button>
    </div>
  );
};

export default CarCard;
