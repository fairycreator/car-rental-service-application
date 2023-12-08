import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Btn,
  Descr,
  Image,
  ThumbImage,
  Item,
  Paragraf,
  Span,
  StyledHeart,
  StyledHeartIcon,
} from "./CarCard.styled";
import { CarModal } from "../../components/CarModal/CarModal";
import { selectFavoriteCars } from "../../redux/selectors";
import { addFavoriteCar, deleteFavoritCar } from "../../redux/favoriteSlice";

export const CarCard = ({ car }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const handleClick = () => {
    setToggleModal((prevState) => !prevState);
  };
  const handleToogleFavorites = (carId) => {
    const persistedCar = favoriteCars.find(({ id }) => carId === id);

    if (!persistedCar) {
      dispatch(addFavoriteCar(car));
    } else {
      dispatch(deleteFavoritCar(carId));
    }
  };
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;
  const updateaddress = address.split(", ").slice(-2).join(" | ");
  const isInFavorites = favoriteCars.some((i) => i.id === id);

  return (
    <>
      <Item>
        <ThumbImage>
          <Image src={img} alt={model} />
        </ThumbImage>
        <Paragraf>
          <p>
            {make} <Span> {model}, </Span> {year}
          </p>
          <p> {rentalPrice}</p>
        </Paragraf>
        <Descr>
          {updateaddress} | {rentalCompany} | {make} | {id} | {type} |{" "}
          {accessories[0]} | {functionalities[0]}
        </Descr>
        <Btn id={id} onClick={handleClick}>
          learn more
        </Btn>
        <StyledHeart id={id} onClick={() => handleToogleFavorites(id)}>
          <StyledHeartIcon $isInFavorites={isInFavorites} />
        </StyledHeart>
      </Item>
      {toggleModal && <CarModal handleClick={handleClick} car={car}></CarModal>}
    </>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
  }),
};
