import { styled } from 'styled-components';
import { getPagination } from './util';

type Prop = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPost: number;
  btnSize: number;
  pageSize: number;
};

const Pagination = ({ page, setPage, totalPost, pageSize, btnSize }: Prop) => {
  const { currentSet, startPage, endPage, totalPage, totalSet } = getPagination(
    {
      totalPost,
      pageSize,
      btnSize,
      page,
    }
  );

  return (
    <Nav>
      {currentSet > 1 && (
        <Button onClick={() => setPage(1)} $active={false}>
          &lt;&lt;
        </Button>
      )}
      {currentSet > 1 && (
        <Button onClick={() => setPage(startPage - 1)} $active={false}>
          &lt;
        </Button>
      )}
      {Array(btnSize)
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
        })}
      {totalSet > currentSet && (
        <Button onClick={() => setPage(endPage + 1)} $active={false}>
          &gt;
        </Button>
      )}
      {totalSet > currentSet && (
        <Button onClick={() => setPage(totalPage)} $active={false}>
          &gt;&gt;
        </Button>
      )}
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
