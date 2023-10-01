import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <nav>{pathname !== '/' && <Link to="/">뒤로가기</Link>}</nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  backdrop-filter: saturate(180%) blur(5px);
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: end;
  box-shadow: 0 5px 10px #e1e5ee;

  nav {
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 300px;

    a {
      font-family: 'Nanum Pen Script';
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
      border: 1px solid #333;
      border-radius: 14px;
      padding: 5px 10px;
    }
  }
`;
