const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const user = {};

const server = http.createServer(async(req, res) => {
  try {
    console.log(req.method, req.url);

    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile(path.join(__dirname, 'static', 'home.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/restFront') {
        const data = await fs.readFile(path.join(__dirname, 'static', 'restFront.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(user));
      } else if (req.url === '/about') {
        const data = await fs.readFile(path.join(__dirname, 'static', 'about.html'));
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      }

      try {
        const data = await fs.readFile(path.join(__dirname, 'static', req.url));
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    } else if (req.method === 'POST') {
      if (req.url === '/user') {
        let body = '';

        req.on('data', (data) => {
          body += data;
        });

        return req.on('end', () => {
          console.log('POST 본문(Body):', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          user[id] = name;
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('OK');
        });
      }
    } else if (req.method === 'PUT') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        let body = '';

        req.on('data', (data) => {
          body += data;
        });

        return req.on('end', () => {
          console.log('PUT 본문(Body):', body);
          user[key] = JSON.parse(body).name;
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('OK');
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete user[key];
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('OK');
      }
    }

    res.writeHead(404);
    return res.end('Not Found!');
    
  } catch (err) {
    console.log(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
  // res.write('<h1>Hello Node!</h1>');
  // res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중입니다!');
});

server.on('error', (error) => {
  console.error(error);
});