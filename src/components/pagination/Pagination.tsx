import { styled } from 'styled-components';

type Prop = {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  startPage: number;
  endPage: number;
};

const Pagination = ({
  total,
  limit,
  page,
  setPage,
  startPage,
  endPage,
}: Prop) => {
  const pageNumber = Math.ceil(total / limit); // 버튼의 수
  console.log();

  return (
    <Nav>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        $active={false}
      >
        &lt;
      </Button>
      {Array(pageNumber)
        .fill(0)
        .map((_, i) => (
          <Button
            key={i}
            onClick={() => setPage(i + 1)}
            $active={page === i + 1}
          >
            {i + 1}
          </Button>
        ))}
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === pageNumber}
        $active={false}
      >
        &gt;
      </Button>
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
