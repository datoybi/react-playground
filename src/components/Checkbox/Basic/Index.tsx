/*
 * https://egg-programmer.tistory.com/282 참고하여 checkbox 구현
 */

import List from './List';
import { Title, Container } from 'components/common';

const Index = () => {
  return (
    <>
      <Title>Checkbox basic(전체 선택, 각각 선택)</Title>
      <Container>
        <List />
      </Container>
    </>
  );
};

export default Index;
