import * as columnFuncs from '../services/columnFuncs';

export const columns = [
  { field: 'rank', headerName: '#', width: 70 },
  { field: 'name', headerName: 'Coin', width: 130 },
  {
    field: 'rate',
    headerName: 'Price',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.roundSum,
  },
  {
    field: 'cap',
    headerName: 'Market Cap',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.convertToShirt,
  },
  {
    field: 'volume',
    headerName: 'Volume 24h',
    type: 'number',
    width: 120,
  },

  // {
  //   field: 'liquidity',
  //   headerName: 'Liquidity ±2%',
  //   type: 'number',
  //   width: 90,
  // },
  {
    field: 'allTimeHighUSD',
    headerName: 'All-time High',
    type: 'number',
    width: 120,
    valueGetter: columnFuncs.roundSum,
  },
  {
    field: 'hour',
    headerName: '1h',
    type: 'number',
    width: 120,
    valueGetter: params => (params.row?.delta?.hour - 1) * 100,
  },
  {
    field: 'day',
    headerName: '24h',
    type: 'number',
    width: 120,
    valueGetter: params => (params.row?.delta?.day - 1) * 100,
  },
  {
    field: 'week',
    headerName: 'weekly',
    type: 'number',
    width: 120,
    valueGetter: params => (params.row?.delta?.week - 1) * 100,
  },
];
