import { Prop } from './index';

const List = ({ datas }: { datas: Prop[] }) => {
  return (
    <>
      {datas.map((item: Prop) => (
        <ul>
          <li>{item.name}</li>
          {item.children?.length !== 0 && <List datas={item.children} />}
        </ul>
      ))}
    </>
  );
};

export default List;
