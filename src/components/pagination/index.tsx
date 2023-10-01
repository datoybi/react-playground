import { useState, useEffect } from 'react';
import { Container, Title } from 'components/common';
import { title } from 'constants/title';
import { styled } from 'styled-components';
import axios, { AxiosResponse } from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Pagination = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1); // 현재 페이지 수
  const limit = 10; // 페이지당 보여줄 게시물 수
  const offset = (page - 1) * limit; // 보여줄 첫번째 게시물

  useEffect(() => {
    axios
      .get(URL)
      .then((res: AxiosResponse<Post[]>) => setPosts(res.data))
      .catch(error => console.error(error));
  }, []);

  console.log(posts);

  return (
    <>
      <Title>{title.pagination}</Title>
      <Container>
        {posts.map(post => (
          <Section key={post.id}>
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </Section>
        ))}
        <Buttons>
          <button>맨앞</button>
          <button>⬅️</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>➡️</button>
          <button>맨뒤</button>
        </Buttons>
      </Container>
    </>
  );
};

export default Pagination;

const Section = styled.section`
  margin: 20px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  & > h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;
