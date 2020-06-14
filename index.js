const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /*
  // if the path is ./ render index.html ===========
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }

  // if to render an API ==============
  if (req.url === '/api/users') {
    const users = [
      { name: 'Bob', age: 40 },
      { name: 'John', age: 20 },
    ];
    res.writeHead(200, { 'Content-Type': 'Application/Json' });
    res.end(JSON.stringify(users));
  }
  */

  // Build File Path ================
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Get the extension of the file
  let extname = path.extname(filePath);

  // set initial Content type:
  let contentType = 'text/html';

  // Check extension and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType === 'text/html' && extname === '') filePath += '.html';

  // Read file =======
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
