import { useState } from 'react';
import Item from './Item';

const List = () => {
  const items = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [checkedItems, setCheckedItems] = useState(new Set()); // 체크박스의 전체를 담아두는 Set
  const [isAllChecked, setIsAllChecked] = useState(false); // 전체 선택이 클릭됐는지 유무

  const allCheckHandler = () => {
    if (!isAllChecked) {
      setCheckedItems(new Set(items.map(item => item)));
      setIsAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setIsAllChecked(false);
    }
  };

  const checkedItemHandler = (id: number, isChecked: boolean) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="all"
          checked={isAllChecked}
          onChange={allCheckHandler}
        />
        <label htmlFor="all">전체 선택</label>
      </div>
      {items.map(item => (
        <Item
          key={item}
          item={item}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
        />
      ))}
      <button onClick={() => console.log(checkedItems)}>제출</button>
    </>
  );
};

export default List;
