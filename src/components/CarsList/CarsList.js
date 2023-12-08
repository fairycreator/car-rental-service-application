import { CarCard } from "../CarCard/CarCard";

import { List } from "./CarsList.styled";

export const CarsList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </List>
  );
};
