import {
  CustomTable,
  CustomTableBody,
  WeightChartGlobalStyles,
  CustomTableCell,
  CustomTableContainer,
  CustomTableRow,
  CustomPaper,
} from './WeightTable.styled';
function createData(day, weight) {
  return { day, weight };
}
let column = [];

for (let i = 1; i < 31; i++) {
  column.push(createData(68 + i, i));
}

export const WeightTable = () => {
  return (
    <>
      <CustomTableContainer component={CustomPaper}>
        <CustomTable sx={{ minWidth: 650 }} aria-label="simple table">
          <CustomTableBody>
            <CustomTableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {column.map((column) => (
                <CustomTableCell key={column.day} component="th" scope="row">
                  {column.day}
                </CustomTableCell>
              ))}
            </CustomTableRow>
            <CustomTableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {column.map((column) => (
                <CustomTableCell key={column.day} align="right">
                  {column.weight}
                </CustomTableCell>
              ))}
            </CustomTableRow>
          </CustomTableBody>
        </CustomTable>
      </CustomTableContainer>
      <WeightChartGlobalStyles />
    </>
  );
};
