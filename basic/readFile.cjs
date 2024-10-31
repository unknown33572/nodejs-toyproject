const fs = require('fs').promises;

// fs.readFile('./hi.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     throw err;
//   }
//   console.log(data);
//   // console.log(data.toString());
// });

fs.readFile('./hi.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
    throw err;
  });