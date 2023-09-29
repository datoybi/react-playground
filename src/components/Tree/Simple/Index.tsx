/*
 * https://naveenda.medium.com/how-to-recursively-render-the-react-component-a821b3532894 참고하여 tree 구현
 */
import { styled } from 'styled-components';

const Index = () => {
  return (
    <>
      <h1 className="title">tree 그리기 (재귀)</h1>
      <List>
        <li>aaa</li>
        <li>bbb</li>
        <List>
          <li>ccc</li>
        </List>
        <li>ddd</li>
      </List>
    </>
  );
};

export default Index;

const List = styled.ul`
  * {
    list-style: disc;
  }
`;
