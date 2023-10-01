import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

const Wrapper = styled.h1`
  background: white;
  box-shadow: 0.25rem 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  padding: 50px;
  margin: 0;
  border-radius: 0.1rem;
`;
