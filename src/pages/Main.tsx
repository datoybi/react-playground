import './Main.scss';
import { useNavigate } from 'react-router-dom';
import { title } from 'constants/title';

export default function Main() {
  const navigate = useNavigate();
  // TODO: json으로 빼기
  return (
    <div className="main">
      <h1>React Playground!</h1>
      <ul>
        <li onClick={() => navigate('/checkbox-basic')}>
          {title.checkboxBasic}
        </li>
        <li onClick={() => navigate('/checkbox-hook')}>{title.checkboxHook}</li>
        <li onClick={() => navigate('/tree-simple')}>{title.treeSimple}</li>
        <li onClick={() => navigate('/tree-foldable')}>{title.treeFoldable}</li>
        <li onClick={() => navigate('/pagination-basic')}>
          {title.paginationBasic}
        </li>
        <li onClick={() => navigate('/pagination-refactor')}>
          {title.paginationRefactor}
        </li>
        <li onClick={() => navigate('/responsive-list')}>
          {title.responsiveList}
        </li>
      </ul>
    </div>
  );
}
