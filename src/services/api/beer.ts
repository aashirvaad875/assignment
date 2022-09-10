import { Beers, queryParams } from 'types';
import { requests } from './config';

export const BeerApi = {
  get: (queryParams: queryParams): Promise<Beers[]> => {
    return requests.get(`/beers`, { ...queryParams });
  },
};
