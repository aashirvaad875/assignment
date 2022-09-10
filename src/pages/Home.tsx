import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Home.module.css';
import { ProductCardView } from 'components/Modules/Product';
import { Button } from 'components/Widgets/Button';
import { BeerApi } from 'services/api/beer';
import { Beers, queryParams } from 'types';
import { MainLayout } from 'components/Layout';
import { ExpandMore } from '@mui/icons-material';

export const Home = () => {
  const [getCurrentPage, setCurrentPages] = useState<number>(1);
  const [getPerPage, setPerPage] = useState<number>(10);
  const [getBeerList, setBeerList] = useState<Beers[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getBeers = async () => {
      const queryParams: queryParams = {
        page: getCurrentPage,
        per_page: getPerPage,
      };
      try {
        const response = await BeerApi.get(queryParams);
        setBeerList([...getBeerList, ...response]);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err.response?.data);
        }
      }
      setLoading(false);
    };
    getBeers();
  }, [getCurrentPage]);

  return (
    <MainLayout title="Beer List" description="">
      <div className={style['home-container']}>
        <div className={style['section']}>
          <h1 className={style['main-label']}>Beers</h1>
          <div className={style['product']}>
            <ProductCardView data={getBeerList} />
          </div>
          {!isLoading && (
            <div className={style['pagination']}>
              <Button
                label={'Load More'}
                loading={isLoading}
                classname="pagination-button"
                submit={() => {
                  setCurrentPages(getCurrentPage + 1);
                }}
                type={'button'}
                image={<ExpandMore />}
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
