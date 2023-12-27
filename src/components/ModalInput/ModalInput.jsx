import sprite from '../../assets/images/sprite.svg';
import { InputBlock, RecordInputBig } from './ModalInput.styled';

export const ModalInput = ({ dataIndex, resetForm, values, remove }) => {
  return (
    <InputBlock key={dataIndex}>
      <RecordInputBig
        id={`products.${dataIndex}.name`}
        name={`products.${dataIndex}.name`}
        placeholder="The name of the product or dish"
        value={values.products[dataIndex].name}
      />
      <RecordInputBig
        id={`products.carbogidrate${dataIndex}`}
        name={`products.carbogidrate${dataIndex}`}
        placeholder="Carbonoh."
        type="number"
        min={1}
      />
      <RecordInputBig
        id={`products.protein${dataIndex}`}
        name={`products.protein${dataIndex}`}
        placeholder="Protein"
        min={1}
        type="number"
      />
      <RecordInputBig
        id={`products.fat${dataIndex}`}
        name={`products.fat${dataIndex}`}
        placeholder="Fat"
        min={1}
        type="number"
      />
      <RecordInputBig
        id={`products.calories${dataIndex}`}
        name={`products.calories${dataIndex}`}
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
        onClick={(e) => {
          const index = e.currentTarget.dataset.set;
          console.log(index);
          if (index === '0') {
            resetForm();
            return;
          }
          remove(index);
        }}
      >
        <use href={`${sprite}#trash-delete`}></use>
      </svg>
    </InputBlock>
  );
};
