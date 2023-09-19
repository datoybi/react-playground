import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFoundPage from './pages/404';
import Checkbox from './pages/Checkbox/Checkbox';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/checkbox" element={<Checkbox />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
