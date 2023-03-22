import axios from 'axios';
import { getStreetsInCity } from './getStreetsInCity';

export let chosenCity = '';

export const getCity = async (city: string): Promise<void> => {
  try {
    await axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&q=${city}`
      )
      .then((res) => {
        const { records } = res.data.result;

        Object.values(records).map((record: any) => {
          if (record['שם_ישוב'].trim() === city) {
            chosenCity = city;
            getStreetsInCity();
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
