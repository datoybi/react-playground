import './Main.scss';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  // TODO: json으로 빼기
  return (
    <div className="main">
      <h1>React Playground!</h1>
      <ul>
        <li onClick={() => navigate('/checkbox-basic')}>
          Checkbox basic(전체 선택, 각각 선택)
        </li>
        <li onClick={() => navigate('/checkbox-hook')}>Checkbox 커스텀 훅</li>
        <li onClick={() => navigate('/tree-simple')}>tree그리기 기초</li>
        <li onClick={() => navigate('/tree-clickable')}>접히는 tree 그리기</li>
      </ul>
    </div>
  );
}
