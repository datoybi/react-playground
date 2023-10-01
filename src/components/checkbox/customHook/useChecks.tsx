import { useState } from 'react';
import CheckBoxes from './CheckBoxes';

type UseChecksResult = [boolean, () => JSX.Element];

const useChecks = (labels: readonly string[]): UseChecksResult => {
  const [checkList, setCheckList] = useState(() => labels.map(() => false));

  const handleCheckClick = (index: number) => {
    setCheckList((checks: boolean[]) =>
      checks.map((isCheck, i) => (index === i ? !isCheck : isCheck))
    );
  };

  const isAllChecked = checkList.every(checkbox => checkbox);

  const renderChecks = () => (
    <CheckBoxes
      checkList={checkList}
      labels={labels}
      onCheck={handleCheckClick}
    />
  );

  return [isAllChecked, renderChecks];
};

export default useChecks;
