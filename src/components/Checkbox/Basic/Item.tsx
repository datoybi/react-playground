import { useState, useEffect } from 'react';

type ItemProp = {
  item: number;
  checkedItemHandler: (id: number, isChecked: boolean) => void;
  isAllChecked: boolean;
};

const Item = ({ item, checkedItemHandler, isAllChecked }: ItemProp) => {
  const [checked, setChecked] = useState(false);

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    checkedItemHandler(item, e.target.checked);
  };

  const allCheckHandler = () => {
    setChecked(isAllChecked); // 전체 선택을 누르면 useEffect로인해 setChecked의 값이 변함
  };

  useEffect(() => {
    allCheckHandler();
  }, [isAllChecked]);

  const itemId = item.toString();
  return (
    <div>
      <input
        type="checkbox"
        id={itemId}
        checked={checked}
        onChange={e => checkHandler(e)}
      />
      <label htmlFor={itemId}>item {item}</label>
    </div>
  );
};

export default Item;
