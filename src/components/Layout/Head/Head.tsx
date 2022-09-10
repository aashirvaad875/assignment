import { Helmet } from 'react-helmet-async';
import { HeadProps } from 'types';

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | Houzz Home Assignment` : undefined}
      defaultTitle="HouzzHomessignment React"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
