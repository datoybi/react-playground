import { styled } from 'styled-components';
import { title } from 'constants/title';
import { Container, Title } from 'components/common';
import ItemElement from './Item';

const DynamicResponsiveList = () => {
  const items = Array(20).fill(<ItemElement />);

  return (
    <>
      <Title>{title.responsiveDynamicList}</Title>
      <Container>
        <Wrapper>
          <List>{items}</List>
        </Wrapper>
      </Container>
    </>
  );
};

export default DynamicResponsiveList;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px; // 최대 width
`;

const List = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
