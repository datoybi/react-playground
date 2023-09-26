import { useState, useEffect } from 'react';

// 다른 input이랑 다른점?
// list에서 전체 checkbox의 체크 유무를 state로 가지고 있음 (checkedItemHandler로 전달)

type ItemProp = {
  item: number;
  checkedItemHandler(id: number, isChecked: boolean): void;
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

const List = () => {
  const items = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [isAllChecked, setIsAllChecked] = useState(false);

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

const Checkbox = () => {
  return <List />;
};

export default Checkbox;

// https://egg-programmer.tistory.com/282
// https://engineering.linecorp.com/ko/blog/line-securities-frontend-3
