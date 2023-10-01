export const datas = [
  {
    parentId: 'root',
    id: '1',
    name: '과일',
    children: [
      {
        parentId: '1',
        id: '2',
        name: '열대 과일',
        children: [
          {
            parentId: '2',
            id: '3',
            name: '망고',
            children: [],
          },
          {
            parentId: '2',
            id: '4',
            name: '코코넛',
            children: [],
          },
          {
            parentId: '2',
            id: '5',
            name: '바나나',
            children: [],
          },
        ],
      },
      {
        parentId: '1',
        id: '6',
        name: '베리류',
        children: [
          {
            parentId: '6',
            id: '7',
            name: '블루베리',
            children: [],
          },
          {
            parentId: '6',
            id: '8',
            name: '아사이베리',
            children: [],
          },
          {
            parentId: '6',
            id: '9',
            name: '크렌베리',
            children: [],
          },
          {
            parentId: '1',
            id: '10',
            name: '포도',
            children: [
              {
                parentId: '10',
                id: '11',
                name: '샤인머스켓',
                children: [],
              },
              { parentId: '10', id: '12', name: '거봉', children: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    parentId: 'root',
    id: '12',
    name: '동물',
    children: [
      { parentId: '12', id: '13', name: '애완동물', children: [] },
      {
        parentId: '12',
        id: '14',
        name: '야생동물',
        children: [],
      },
    ],
  },
  {
    parentId: 'root',
    id: '15',
    name: '사람',
    children: [],
  },
];
