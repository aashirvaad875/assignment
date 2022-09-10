import React, { useState } from 'react';
import style from './ProductCardView.module.css';
import classNames from 'classnames';
import { CardViewProps } from 'types';
import { Fade, Tooltip, withStyles } from '@material-ui/core';

export const ProductCardView = ({ data }: CardViewProps) => {
  const [getVisiblity, setVisiblity] = useState<boolean>(false);
  return (
    <React.Fragment>
      {data?.map((item, index) => {
        return (
          <div className={style['card-view']} key={index}>
            <div
              className={classNames(
                `${style['card-view-wrapper']}`,
                getVisiblity && style['card-view-wrapper-hover']
              )}
            >
              <ProductImageTooltip
                placement="top"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={
                  <h1 className="tooltip-title">{`ingredients: ${Object.keys(item.ingredients).join(
                    ', '
                  )}`}</h1>
                }
                arrow
              >
                <div className={classNames(`${style['image-wrapper']}`)}>
                  <div>
                    <img src={item.image_url} />
                  </div>
                </div>
              </ProductImageTooltip>

              <div
                className={style['content-wrapper']}
                onMouseEnter={() => setVisiblity(true)}
                onMouseLeave={() => setVisiblity(false)}
              >
                <h1>{item.name}</h1>
                <label>{item.ingredients.yeast}</label>
                <p className="production-description">{item.brewers_tips}</p>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

const ProductImageTooltip = withStyles({
  tooltip: {
    backgroundColor: '#000000',
  },
  arrow: {
    color: '#000000',
  },
})(Tooltip);
