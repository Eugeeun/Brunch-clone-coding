const categories = [
  {
    category: '시사',
    link: '#',
  },
  {
    category: 'IT',
    link: '#',
  },
  {
    category: '뮤직',
    link: '#',
  },
  {
    category: '글쓰기',
    link: '#',
  },
  {
    category: '육아',
    link: '#',
  },
  {
    category: '요리',
    link: '#',
  },
  {
    category: '운동',
    link: '#',
  },
  {
    category: '멘탈',
    link: '#',
  },
  {
    category: '예술',
    link: '#',
  },
  {
    category: '사랑',
    link: '#',
  },
  {
    category: '시사',
    link: '#',
  },
  {
    category: 'IT',
    link: '#',
  },
  {
    category: '뮤직',
    link: '#',
  },
  {
    category: '글쓰기',
    link: '#',
  },
  {
    category: '육아',
    link: '#',
  },
  {
    category: '요리',
    link: '#',
  },
  {
    category: '운동',
    link: '#',
  },
  {
    category: '멘탈',
    link: '#',
  },
  {
    category: '예술',
    link: '#',
  },
  {
    category: '사랑',
    link: '#',
  },
  {
    category: '시사',
    link: '#',
  },
  {
    category: 'IT',
    link: '#',
  },
  {
    category: '뮤직',
    link: '#',
  },
  {
    category: '글쓰기',
    link: '#',
  },
  {
    category: '육아',
    link: '#',
  },
  {
    category: '요리',
    link: '#',
  },
  {
    category: '운동',
    link: '#',
  },
  {
    category: '멘탈',
    link: '#',
  },
  {
    category: '예술',
    link: '#',
  },
  {
    category: '사랑',
    link: '#',
  },
];

const categoryBox = document.querySelector('.category');
categories.forEach(object => {
  const list = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.innerText = object.category;
  anchor.href = object.link;

  list.appendChild(anchor);
  categoryBox.appendChild(list);
  // console.log(list);
});

// console.log(categoryBox);
