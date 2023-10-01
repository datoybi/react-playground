import { styled } from 'styled-components';
import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Title;

const Wrapper = styled.h1`
  font-family: 'Nanum Pen Script';
  font-size: 2rem;
  margin-bottom: 30px;
`;
