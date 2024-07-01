import { styled } from 'styled-components';
import ThumbPath from './thumbnail.jpeg';

const ItemElement = () => {
  return (
    <Item>
      <ImgWrapper>
        <Image src={ThumbPath} />
      </ImgWrapper>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1 1;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  /* padding-bottom: 50%; */
  overflow: hidden;
`;

const Image = styled.img`
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 100%;
`;

export default ItemElement;
