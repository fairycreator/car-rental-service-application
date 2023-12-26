import sprite from '../../assets/images/sprite.svg';
import {
  InputBlock,
  RecordInputBig,
  SubInput,
  SubInputBlock,
} from './ModalInput.styled';

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
}) => {
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
        >
          <use href={`${sprite}#trash-delete`}></use>
        </svg>
      </SubInputBlock>
    </InputBlock>
  );
};
