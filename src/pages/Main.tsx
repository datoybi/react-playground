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
      </ul>
    </div>
  );
}
