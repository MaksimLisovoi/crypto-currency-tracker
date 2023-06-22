import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getCurrencyList } from 'services/coinDbApi';
import { columns } from 'constants/columns';

export const DataTable = () => {
  const [currencies, setcurrencies] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  // const [rowCountState, setRowCountState] = useState(rowCount);
  // useEffect(() => {
  //   setRowCountState(prevRowCountState => (rowCount !== undefined ? rowCount : prevRowCountState));
  // }, [rowCount, setRowCountState]);

  useEffect(() => {
    getCurrencyList().then(setcurrencies);
  }, []);

  console.log(currencies);

  return (
    <DataGrid
      rows={currencies}
      getRowId={row => row.rank}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 20 },
        },
      }}
      pageSizeOptions={[20, 10]}

      // rowCount={rowCountState}
      // loading={isLoading}
      // pageSizeOptions={[5]}
      // paginationModel={paginationModel}
      // paginationMode="server"
      // onPaginationModelChange={setPaginationModel}
    />
  );
};
