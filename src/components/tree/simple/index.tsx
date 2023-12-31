/*
 * https://naveenda.medium.com/how-to-recursively-render-the-react-component-a821b3532894 참고하여 tree 구현
 
	<ul>
		<li>aaa</li>
  	<li>bbb</li>
    <ul>
    	<li>ccc</li>
    </ul>
    <li>ddd</li>
  </ul> 
	
 */

import { styled } from 'styled-components';
import { datas } from './datas';
import List from './List';
import { Title, Container } from 'components/common';
import { title } from 'constants/title';

export type Prop = {
  name: string;
  children: Prop[];
};

const Index = () => {
  return (
    <Wrapper>
      <Title>{title.treeSimple}</Title>
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
  }
`;
