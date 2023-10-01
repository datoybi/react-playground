import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Main from 'pages/Main';
import NotFoundPage from 'pages/404';
import CheckboxBasic from 'components/checkbox/basic';
import CheckboxHook from 'components/checkbox/customHook';
import SimpleTree from 'components/tree/simple';
import ClickableTree from 'components/tree/foldable';
import PaginationBasic from 'components/pagination/basic';
import PaginationRefactor from 'components/pagination/refactor';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/checkbox-basic" element={<CheckboxBasic />} />
      <Route path="/checkbox-hook" element={<CheckboxHook />} />
      <Route path="/tree-simple" element={<SimpleTree />} />
      <Route path="/tree-foldable" element={<ClickableTree />} />
      <Route path="/pagination-basic" element={<PaginationBasic />} />
      <Route path="/pagination-refactor" element={<PaginationRefactor />} />
      <Route path="*" element={<NotFoundPage />} />
    </ReactRouterRoutes>
  );
};
