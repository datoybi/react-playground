type Prop = {
  totalPost: number;
  pageSize: number;
  btnSize: number;
  page: number;
};

export const getPagination = ({ totalPost, pageSize, btnSize, page }: Prop) => {
  const currentSet = Math.ceil(page / btnSize); // 현재 버튼 세트 번호
  const startPage = (currentSet - 1) * btnSize + 1; // 시작 페이지 번호
  const endPage = startPage + btnSize - 1; // 끝 페이지 번호
  const totalPage = Math.ceil(totalPost / pageSize); // 총 페이지
  const totalSet = Math.ceil(totalPage / btnSize); // 전체 세트 수
  const startPost = (page - 1) * pageSize + 1; // 시작 게시물 번호
  const endPost = startPost + pageSize - 1; // 끝 게시물 번호

  return {
    currentSet,
    startPage,
    endPage,
    totalPage,
    totalSet,
    startPost,
    endPost,
  };
};
