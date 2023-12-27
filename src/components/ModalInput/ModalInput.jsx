import { useDispatch } from 'react-redux';
import sprite from '../../assets/images/sprite.svg';
import { InputBlock, RecordInputBig } from './ModalInput.styled';

export const ModalInput = ({
  // setName,
  // setColories,
  // setCarbogidrate,
  // setProtein,
  // setFat,
  // name,
  // calories,
  // carbogidrate,
  // protein,
  // fat,
  dataIndex,
  handleDeleteInput,
  resetForm,
}) => {
  return (
    <InputBlock>
      <RecordInputBig
        id="name"
        name="name"
        placeholder="The name of the product or dish"
      />
      <RecordInputBig
        id="carbogidrate"
        name="carbogidrate"
        placeholder="Carbonoh."
        type="number"
        min={1}
      />
      <RecordInputBig
        id="protein"
        name="protein"
        placeholder="Protein"
        min={1}
        type="number"
      />
      <RecordInputBig
        id="fat"
        name="fat"
        placeholder="Fat"
        min={1}
        type="number"
      />
      <RecordInputBig
        id="calories"
        name="calories"
        placeholder="Calories"
        min={1}
        type="number"
      />
      <svg
        style={{
          display: 'inline-block',
          width: '20px',
          height: ' 20px',
          fill: 'white',
        }}
        data-set={dataIndex}
        onClick={(e) => handleDeleteInput(e, resetForm)}
      >
        <use href={`${sprite}#trash-delete`}></use>
      </svg>
    </InputBlock>
  );
};
