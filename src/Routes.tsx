import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFoundPage from './pages/404';
import CheckboxBasic from './components/Checkbox/Basic/Index';
import CheckboxHook from './components/Checkbox/CustomHook/Index';
import SimpleTree from './components/Tree/Simple/Index';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/checkbox-basic" element={<CheckboxBasic />} />
      <Route path="/checkbox-hook" element={<CheckboxHook />} />
      <Route path="/tree-simple" element={<SimpleTree />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
