import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import {
  InputBlock,
  RecordInputBig,
  SubInput,
  SubInputBlock,
} from './ModalInput.styled';
import { deleteInputHandler } from '../../redux/dailyFoodStatistics/foodSlice';

export const ModalInput = ({
  setName,
  setColories,
  setCarbogidrate,
  setProtein,
  setFat,
  name,
  calories,
  carbogidrate,
  protein,
  fat,
  dataIndex,
}) => {
  const dispatch = useDispatch();
  const handleDeleteInput = (e) => {
    const index = e.currentTarget.dataset.set;
    if (index === '0') {
      setName('');
      setColories('');
      setCarbogidrate('');
      setProtein('');
      setFat('');
      return;
    }
    dispatch(deleteInputHandler(index));
  };
  return (
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
            setColories(e.target.value);
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
          data-set={dataIndex}
          onClick={handleDeleteInput}
        >
          <use href={`${sprite}#trash-delete`}></use>
        </svg>
      </SubInputBlock>
    </InputBlock>
  );
};
