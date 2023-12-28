import { useDispatch } from 'react-redux';
import { updateFood } from '../../redux/dailyFoodStatistics/foodOperations';
import { openHandler } from '../../redux/dailyFoodStatistics/foodSlice';
import {
  MealContainer,
  MealImage,
  MealTitle,
} from '../Diary-planner/PlannerCard/PlannerCard.styled';
import {
  BackDrop,
  Button,
  ButtonBlock,
  ContentBlock,
  InputBlock,
  RecordInputBig,
  SubInput,
  SubInputBlock,
  Title,
  CancelButton,
} from './Reacord.styled';
import sprite from '../../assets/images/sprite.svg';
import { capitalize } from '@mui/material';

export const Record = ({
  type,
  secondType,
  name,
  calories,
  carbogidrate,
  protein,
  fat,
  productId,
  setName,
  setCalories,
  setCarbogidrate,
  setProtein,
  setFat,
}) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(openHandler(false));
  };
  const arr = {
    typeFood: type,
    userFood: {
      name,
      calories,
      nutrition: { carbogidrate, protein, fat },
    },
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateFood({ id: productId, food: arr }));
    onCloseHandler();
  };

  return (
    <BackDrop>
      <ContentBlock>
        <Title>Record your meal</Title>
        <MealContainer
          style={{
            // justifyContent: 'baseline',
            marginTop: '24px',
          }}
        >
          {/* виправити картинки!!!!!! */}
          <MealImage src="src/assets/images/Breakfast.png" />
          <MealTitle>{capitalize(type)}</MealTitle>
        </MealContainer>
        <form onSubmit={formHandler}>
          <InputBlock>
            <RecordInputBig
              value={name}
              placeholder="The name of the product or dish"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <RecordInputBig
              type={'number'}
              min={1}
              onChange={(e) => {
                setCarbogidrate(e.target.value);
              }}
              value={carbogidrate}
              placeholder="Carbonoh"
            />
            <RecordInputBig
              min={1}
              type={'number'}
              onChange={(e) => {
                setProtein(e.target.value);
              }}
              value={protein}
              placeholder="Protein"
            />
            <SubInputBlock>
              <SubInput
                min={1}
                type={'number'}
                onChange={(e) => {
                  setFat(e.target.value);
                }}
                value={fat}
                placeholder="Fat"
              />
              <SubInput
                min={1}
                type={'number'}
                onChange={(e) => {
                  setCalories(e.target.value);
                }}
                value={calories}
                placeholder="Calories"
              />
              <svg
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: ' 20px',
                  fill: 'white',
                }}
              >
                <use href={`${sprite}#trash-delete`}></use>
              </svg>
            </SubInputBlock>
          </InputBlock>
          <ButtonBlock>
            <Button type="submit">Confirm</Button>
            <CancelButton onClick={onCloseHandler} type="button">
              Cancel
            </CancelButton>
          </ButtonBlock>
        </form>
      </ContentBlock>
    </BackDrop>
  );
};
