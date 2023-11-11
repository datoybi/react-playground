import { useState, useEffect } from 'react';
import { Container, Title } from 'components/common';
import { title } from 'constants/title';
import { styled } from 'styled-components';
import axios, { AxiosResponse } from 'axios';
import Pagination from './Pagination';
import usePagination from './usePagination';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PAGINATION = {
  pageRange: 5,
  btnRange: 5,
};

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { page, currentList, setPage, totalPost } = usePagination({
    pageRange: PAGINATION.pageRange,
    list: posts,
  });

  useEffect(() => {
    axios
      .get(URL)
      .then((res: AxiosResponse<Post[]>) => setPosts(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Title>{title.paginationRefactor}</Title>
      <Container>
        {currentList.map((post: Post) => (
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
          btnRange={PAGINATION.btnRange}
          pageRange={PAGINATION.pageRange}
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
