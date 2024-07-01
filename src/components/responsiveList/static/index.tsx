import { styled } from 'styled-components';
import { title } from 'constants/title';
import { Container, Title } from 'components/common';

const StaticResponsiveList = () => {
  const elements = Array(20).fill(<Item />);

  return (
    <>
      <Title>{title.responsiveStaticList}</Title>
      <Container>
        <List>{elements}</List>
      </Container>
    </>
  );
};

export default StaticResponsiveList;

const Item = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 150px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 8px;

  @media (max-width: 759px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 611px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;
