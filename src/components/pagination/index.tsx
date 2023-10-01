import { useState, useEffect } from 'react';
import { Container, Title } from 'components/common';
import { title } from 'constants/title';
import { styled } from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Pagination from './Pagination';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1); // 현재 페이지 수
  const total = 100; // 총 게시물 수
  const limit = 5; // 페이지당 보여줄 게시물 수 pagePerSize
  const offset = (page - 1) * limit; // 보여줄 첫번째 게시물

  const pageBtnSize = 5; // 보여질 페이지 버튼의 개수;
  const currentSet = Math.ceil(page / pageBtnSize); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * pageBtnSize + 1; // 시작 페이지 번호
  const endPage = startPage + pageBtnSize - 1; // 끝 페이지 번호
  const totalPage = Math.ceil(total / limit);
  const totalSet = Math.ceil(totalPage / pageBtnSize); // 전체 세트 수

  const startPost = (page - 1) * limit + 1; // 시작 게시글 번호
  const endPost = startPost + limit - 1; // 끝 게시글 번호

  console.log('page', page);
  console.log('currentSet', currentSet);
  console.log('startPage', startPage);
  console.log('endPage', endPage);
  console.log('startPost', startPost);
  console.log('endPost', endPost);
  console.log('totalSet', totalSet);

  useEffect(() => {
    axios
      .get(URL)
      .then((res: AxiosResponse<Post[]>) => setPosts(res.data))
      .catch(error => console.error(error));
  }, []);

  // console.log(posts);
  console.log(page);

  return (
    <>
      <Title>{title.pagination}</Title>
      <Container>
        {posts.slice(offset, offset + limit).map(post => (
          <Section key={post.id}>
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </Section>
        ))}

        <Nav>
          {currentSet > 1 && (
            <Button onClick={() => setPage(startPage - 1)} $active={false}>
              &lt;
            </Button>
          )}
          {Array(limit)
            .fill(startPage)
            .map((_, i) => {
              if (startPage + i > totalPage) {
                return;
              }

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
          {currentSet < totalSet && (
            <Button onClick={() => setPage(endPage + 1)} $active={false}>
              &gt;
            </Button>
          )}
        </Nav>
        {/* <Pagination
          total={total}
          limit={limit}
          page={page}
          setPage={setPage}
          startPage={startPage}
          endPage={endPage}
        /> */}
      </Container>
    </>
  );
};

export default Index;

const Section = styled.section`
  margin: 20px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  & > h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ $active: boolean }>`
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};
`;
