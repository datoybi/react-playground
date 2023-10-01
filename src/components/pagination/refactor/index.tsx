import { useState, useEffect } from 'react';
import { Container, Title } from 'components/common';
import { title } from 'constants/title';
import { styled } from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Pagination from './Pagination';
import { getPagination } from './util';

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
  const pageSize = 5; // 페이지당 보여줄 게시물 수
  const btnSize = 5; // 보여질 페이지 버튼의 개수
  const { startPost, endPost } = getPagination({
    totalPost,
    pageSize,
    btnSize,
    page,
  });

  useEffect(() => {
    axios
      .get(URL)
      .then((res: AxiosResponse<Post[]>) => setPosts(res.data))
      .catch(error => console.error(error));
  }, []);

  // console.log(posts);
  // console.log(page);

  return (
    <>
      <Title>{title.paginationRefactor}</Title>
      <Container>
        {posts.slice(startPost - 1, endPost).map(post => (
          <Section key={post.id}>
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </Section>
        ))}
        <Pagination
          page={page}
          setPage={setPage}
          totalPost={totalPost}
          btnSize={btnSize}
          pageSize={pageSize}
        />
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
