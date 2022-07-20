const Item = ({ item }: { item: number }) => {
  const itemId = item.toString();
  return (
    <div>
      <input type="checkbox" id={itemId} />
      <label htmlFor={itemId}>item {item}</label>
    </div>
  );
};

const List = () => {
  const items = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      {items.map(item => (
        <Item key={item} item={item} />
      ))}
    </>
  );
};

const Checkbox = () => {
  return (
    <>
      <List />
    </>
  );
};

export default Checkbox;

// https://egg-programmer.tistory.com/282
