import { useState, useEffect } from 'react';
import { Container, Title } from 'components/common';
import { title } from 'constants/title';
import { styled } from 'styled-components';
import axios, { AxiosResponse } from 'axios';

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
  const totalPost = 100; // 총 게시물 수
  const pageSize = 5; // 페이지당 보여줄 게시물 수 pagePerSize
  const btnSize = 6; // 보여질 페이지 버튼의 개수

  const currentSet = Math.ceil(page / btnSize); // 현재 버튼 세트 번호
  // 페이지 번호
  const startPage = (currentSet - 1) * btnSize + 1; // 시작 페이지 번호
  const endPage = startPage + btnSize - 1; // 끝 페이지 번호
  const totalPage = Math.ceil(totalPost / pageSize); // 총 페이지

  const totalSet = Math.ceil(totalPage / btnSize); // 전체 세트 수

  // 게시물
  const startPost = (page - 1) * pageSize + 1; // 시작 게시물 번호
  const endPost = startPost + pageSize - 1; // 끝 게시물 번호

  // console.log('page', page);
  // console.log('currentSet', currentSet);
  // console.log('startPage', startPage);
  // console.log('endPage', endPage);
  // console.log('startPost', startPost);
  // console.log('endPost', endPost);
  // console.log('totalSet', totalSet);

  useEffect(() => {
    axios
      .get(URL)
      .then((res: AxiosResponse<Post[]>) => setPosts(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Title>{title.paginationBasic}</Title>
      <Container>
        {posts.slice(startPost - 1, endPost).map(post => (
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
          {Array(btnSize)
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
          {totalSet > currentSet && (
            <Button onClick={() => setPage(endPage + 1)} $active={false}>
              &gt;
            </Button>
          )}
        </Nav>
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
