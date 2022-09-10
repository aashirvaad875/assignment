import * as React from 'react';
import { MainLayoutProps } from 'types';
import { Head } from './Head';

export const MainLayout = ({ children, title, description }: MainLayoutProps) => {
  return (
    <React.Fragment>
      <Head title={title} description={description} />
      <div className="container">{children}</div>
    </React.Fragment>
  );
};
