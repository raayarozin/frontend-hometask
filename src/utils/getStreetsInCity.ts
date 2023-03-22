import axios from 'axios';
import { chosenCity } from './getCity';

export let streets = [] as any;

export const getStreetsInCity = async (): Promise<void> => {
  streets = [];
  try {
    await axios
      .get(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=9ad3862c-8391-4b2f-84a4-2d4c68625f4b&q=${chosenCity}&limit=1000`
      )
      .then((res) => {
        const { records } = res.data.result;

        Object.values(records).map((record: any) => {
          if (chosenCity === record['שם_ישוב'].trim()) {
            streets.push(record['שם_רחוב'].trim());
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
