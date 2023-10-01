/*
	어떤 것을 접었는지 알려면 state로 클릭한 부모 id를 저장해둔다.
	저장된 id를 부모로 가진 children만 열린다.
	그러려면 children들은 어떤 부모를 가지고 있는지를 알아야한다. 
	즉, 
	[x] state openItems 선언하기
	[x] datas에 id, parentId 추가하기
	[] dataset을 이용하여 li에 명시
	[] 클릭한 li의 id를 openItems에 추가
	[] openItems에 추가된 id의 children보이기
 */
import { useState } from 'react';
import { styled } from 'styled-components';
import { datas } from './datas';
import List from './List';
import { Title, Container } from 'components/common';
// import Title from 'components/Common/Title';

export type Prop = {
  name: string;
  children: Prop[];
};

const Index = () => {
  const [openItems, setOpenItems] = useState([]);

  return (
    <Wrapper>
      <Title>접히는 tree 그리기</Title>
      <Container>
        <List datas={datas} />
      </Container>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  ul {
    list-style-type: initial;
    padding-left: 40px;
    cursor: pointer;
  }
`;
