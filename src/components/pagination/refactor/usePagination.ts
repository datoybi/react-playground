import { useState } from 'react';

const usePagination = ({
  pageRange,
  list,
}: {
  pageRange: number;
  list: any[];
}) => {
  const [page, setPage] = useState(1); // 현재 페이지

  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호
  const currentList = list?.slice(startPost - 1, endPost) || []; // 현제 보여줄 게시물들
  const totalPost = list?.length || 0; // 총 게시물 수

  return { currentList, setPage, page, totalPost };
};

export default usePagination;
