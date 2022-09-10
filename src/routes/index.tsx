import { Home } from 'pages/Home';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <Home /> }];
  const element = useRoutes([...commonRoutes]);
  return <>{element}</>;
};
