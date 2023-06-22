import axios from 'axios';

let baseUrl = `https://api.livecoinwatch.com/`;

const config = {
  headers: {
    ' x-api-key': '7cc1965a-90a6-4add-b6a6-d770f0f2b887',
  },
};

const data = {
  currency: 'USD',
  sort: 'rank',
  order: 'ascending',
  offset: 0,
  limit: 20,
  meta: true,
};

export async function getCurrencyList() {
  try {
    const allCurrencies = await axios.post(`${baseUrl}coins/list`, data, config);

    console.log(allCurrencies);

    return allCurrencies.data;
  } catch (error) {
    console.error(error.message);
  }
}
