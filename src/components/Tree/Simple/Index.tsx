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

export type Prop = {
  name: string;
  children: Prop[];
};

const Index = () => {
  return (
    <Wrapper>
      <h1 className="title">tree 그리기 (재귀)</h1>
      <List datas={datas} />
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
