const fs = require('fs').promises;

fs.writeFile('./hi.txt', 'Hello World!!!', err => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log('파일이 성공적으로 생성되었습니다.');
});