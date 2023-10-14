import { styled } from 'styled-components';

type Pagination = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPost: number;
  btnRange: number;
  pageRange: number;
};

const Pagination = ({
  page,
  setPage,
  totalPost,
  pageRange,
  btnRange,
}: Pagination) => {
  const currentSet = Math.ceil(page / btnRange); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 버튼의 시작 페이지 번호
  const endPage = startPage + btnRange - 1; // 현재 버튼의 끝 페이지 번호
  const totalPage = Math.ceil(totalPost / pageRange); // 총 게시글 세트 수
  const totalSet = Math.ceil(totalPage / btnRange); // 전체 버튼 세트 수

  const firstButton = currentSet > 1 && (
    <Button onClick={() => setPage(1)} $active={false}>
      &lt;&lt;
    </Button>
  );

  const lastButton = totalSet > currentSet && (
    <Button onClick={() => setPage(totalPage)} $active={false}>
      &gt;&gt;
    </Button>
  );

  const nextButton = totalSet > currentSet && (
    <Button onClick={() => setPage(endPage + 1)} $active={false}>
      &gt;
    </Button>
  );

  const prevButton = currentSet > 1 && (
    <Button onClick={() => setPage(startPage - 1)} $active={false}>
      &lt;
    </Button>
  );

  const numberButtons = Array(btnRange)
    .fill(startPage)
    .map((_, i) => {
      if (startPage + i > totalPage) return;
      return (
        <Button
          key={i}
          onClick={() => setPage(startPage + i)}
          $active={page === startPage + i}
        >
          {startPage + i}
        </Button>
      );
    });

  return (
    <Nav>
      {firstButton}
      {prevButton}
      {numberButtons}
      {nextButton}
      {lastButton}
    </Nav>
  );
};

export default Pagination;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ $active: boolean }>`
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};
`;
