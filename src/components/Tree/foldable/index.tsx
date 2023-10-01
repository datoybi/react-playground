/*
	어떤 것을 접었는지 알려면 state로 클릭한 부모 id를 저장해둔다.
	저장된 id를 부모로 가진 children만 열린다.
	그러려면 children들은 어떤 부모를 가지고 있는지를 알아야한다. 
	즉, 
	[x] state openItems 선언하기
	[x] datas에 id, parentId 추가하기
	[x] dataset을 이용하여 li에 명시
	[x] 클릭한 li의 id를 openItems에 추가
	[] openItems에 추가된 id의 children 보이기

	---
	폴딩을 하기 위해서 ref안에 해당 id의 자식들의 id를 넣어서
	그 아이디에 해당하는 것들을 다 접히게 처리했다.
 */
import { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { datas } from './datas';
import List from './List';
import { Title, Container } from 'components/common';
import { title } from 'constants/title';

export type Prop = {
  id: string;
  parentId: string;
  name: string;
  children: Prop[];
};

type ReturnType = () => ReturnType;

const Index = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const ref = useRef<string[]>([]);

  const getChildrenId = (datas: Prop[]): ReturnType | void => {
    // children id를 얻는 함수
    datas.forEach(data => {
      if (ref.current.includes(data.parentId)) {
        ref.current = [...ref.current, data.id];
      }
      if (data.children?.length !== 0) {
        return getChildrenId(data.children);
      }
    });
  };

  const handleOpenItems = (newItem: string) => {
    if (openItems.includes(newItem)) {
      ref.current = [newItem];
      getChildrenId(datas);
      setOpenItems(prevItems =>
        prevItems.filter(item => !ref.current.includes(item))
      );
    } else {
      setOpenItems(prevItems => [...prevItems, newItem]);
    }
  };

  return (
    <Wrapper>
      <Title>{title.treeFoldable}</Title>
      <Container>
        <List
          datas={datas}
          handleOpenItems={handleOpenItems}
          openItems={openItems}
        />
      </Container>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  ul {
    list-style: initial;
    padding-left: 40px;
    cursor: pointer;
  }
`;
