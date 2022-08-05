const writers = [
  {
    link: '#',
    img: '../imgs/img4.jpg',
    name: 'JongWon',
    job: 'Student',
    desc: '군산대학교 학생입니당',
    categories: ['마케팅', '자기계발'],
  },
  {
    link: '#',
    img: '../imgs/img5.jpg',
    name: 'JongWon',
    job: 'Student',
    desc: '군산대학교 학생입니당',
    categories: ['마케팅', '자기계발'],
  },
  {
    link: '#',
    img: '../imgs/img6.jpg',
    name: 'JongWon',
    job: 'Student',
    desc: '군산대학교 학생입니당',
    categories: ['마케팅', '자기계발'],
  },
];

const writerList = document.querySelector('.list_writers');

writers.forEach(object => {
  const list = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = object.link;
  anchor.classList.add('link_writer');

  const image = document.createElement('img');
  image.src = object.img;
  image.alt = 'profileImg';
  image.classList.add('writer_profile');

  const name = document.createElement('h4');
  name.innerText = object.name;
  name.classList.add('writer_name');

  const job = document.createElement('span');
  job.innerText = object.job;
  job.classList.add('writer_job');

  const desc = document.createElement('p');
  desc.innerText = object.desc;
  desc.classList.add('writer_desc');

  const keywordBox = document.createElement('ul');
  keywordBox.classList.add('writer_keyword');

  object.categories.forEach(keyword => {
    const keywordList = document.createElement('li');
    const keywordBtn = document.createElement('button');

    keywordBtn.innerText = keyword;
    keywordBtn.classList.add('keyword', 'brunch_btn_text');

    keywordList.appendChild(keywordBtn);
    keywordBox.appendChild(keywordList);
  });

  const keywordList = document.createElement('li');
  const keywordBtn = document.createElement('button');
  keywordBtn.innerText = '...';
  keywordBtn.classList.add('keyword', 'brunch_btn_text');
  keywordList.appendChild(keywordBtn);
  keywordBox.appendChild(keywordList);

  // console.log(keywordBox);
  anchor.appendChild(image);
  anchor.appendChild(name);
  anchor.appendChild(job);
  anchor.appendChild(desc);
  // console.log(anchor);
  list.appendChild(anchor);
  list.appendChild(keywordBox);
  // console.log(list);
  writerList.appendChild(list);
});
