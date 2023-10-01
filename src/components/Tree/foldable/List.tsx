import { styled } from 'styled-components';
import { Prop } from './index';

type ListProp = {
  datas: Prop[];
  handleOpenItems: (id: string) => void;
  openItems: string[];
};

const List = ({ datas, handleOpenItems, openItems }: ListProp) => {
  // 아이템을 클릭하면 id 전달
  const handleClickItem = (event: React.SyntheticEvent<EventTarget>) => {
    if (event !== null && event.target instanceof HTMLElement) {
      const newId = event.target.dataset.id;
      if (newId) {
        handleOpenItems(newId);
      }
    }
  };

  return (
    <>
      {datas.map((item: Prop) => (
        <ul key={item.id}>
          <Item
            data-id={item.id}
            data-parent={item.parentId}
            onClick={handleClickItem}
            open={item.parentId === 'root' || openItems.includes(item.parentId)}
          >
            {item.name}
          </Item>
          {item.children?.length !== 0 && (
            <List
              datas={item.children}
              handleOpenItems={handleOpenItems}
              openItems={openItems}
            />
          )}
        </ul>
      ))}
    </>
  );
};

export default List;

const Item = styled.li<{ open: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
`;
