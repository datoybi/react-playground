/*
 * https://engineering.linecorp.com/ko/blog/line-securities-frontend-3 참고하여 checkbox 구현
 */

import useChecks from './useChecks';
const labels = ['check 1', 'check 2', 'check 3', 'check 4', 'check 5'];

const Index = () => {
  const [isAllChecked, renderChecks] = useChecks(labels);

  return (
    <>
      <h1 className="title">Checkbox 커스텀 훅</h1>
      {renderChecks()}
      <p>
        <button disabled={!isAllChecked}>다음</button>
      </p>
    </>
  );
};

export default Index;
