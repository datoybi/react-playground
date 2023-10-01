/*
 * https://egg-programmer.tistory.com/282 참고하여 checkbox 구현
 */

import List from './List';
import { Title, Container } from 'components/common';
import { title } from 'constants/title';

const Index = () => {
  return (
    <>
      <Title>{title.checkboxBasic})</Title>
      <Container>
        <List />
      </Container>
    </>
  );
};

export default Index;
