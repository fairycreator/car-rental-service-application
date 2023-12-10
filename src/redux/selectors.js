import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.items;
export const selectFilter = (state) => state.filter;
export const selectAmountCars = (state) => state.cars.items?.length;
export const selectLoading = (state) => state.cars.isLoading;
export const selectFavoriteCars = (state) => state.favorite.favoriteCar;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, { make, mileageFrom, mileageTo, rentalPrice }) => {
    if (!cars) return [];

    let filteredCars = cars.filter((car) =>
      car.make.toLowerCase().includes(make.toLowerCase())
    );

    filteredCars = cars.filter((car) =>
      car.make.toLowerCase().includes(make.toLowerCase())
    );
    if (rentalPrice > 0) {
      filteredCars = filteredCars.filter((car) => {
        const rentalPriceToNumber = Number(car.rentalPrice.split("$")[1]);
        return rentalPriceToNumber === rentalPrice;
      });
    }
    if (mileageFrom > 0 && mileageTo === 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) => mileage >= mileageFrom
      );
    }
    if (mileageFrom > 0 && mileageTo > 0) {
      filteredCars = filteredCars.filter(
        ({ mileage }) => mileage >= mileageFrom && mileage <= mileageTo
      );
    }
    if (mileageFrom === 0 && mileageTo > 0) {
      filteredCars = filteredCars.filter(({ mileage }) => mileage <= mileageTo);
    }
    return filteredCars;
  }
);
