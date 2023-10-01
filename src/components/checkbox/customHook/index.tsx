/*
 * https://engineering.linecorp.com/ko/blog/line-securities-frontend-3 참고하여 checkbox 구현
 */

import useChecks from './useChecks';
import { Title, Container } from 'components/common';
import { title } from 'constants/title';

const labels = ['check 1', 'check 2', 'check 3', 'check 4', 'check 5'];

const Index = () => {
  const [isAllChecked, renderChecks] = useChecks(labels);

  return (
    <>
      <Title>{title.checkboxHook}</Title>
      <Container>
        {renderChecks()}
        <p>
          <button disabled={!isAllChecked}>다음</button>
        </p>
      </Container>
    </>
  );
};

export default Index;
