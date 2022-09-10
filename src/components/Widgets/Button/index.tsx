import React from 'react';
import { ButtonProps } from 'types';

export const Button = ({ classname, image, label, loading, submit, type }: ButtonProps) => {
  return (
    <React.Fragment>
      <button
        type={type}
        className={classname}
        onClick={() => {
          submit();
        }}
        disabled={loading}
      >
        {label}
        {image !== undefined && image}
      </button>
    </React.Fragment>
  );
};
