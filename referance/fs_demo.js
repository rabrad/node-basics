const fs = require('fs');
const path = require('path');

// Create Folder (async) =========
// fs.mkdir(path[, options], callback)
/**
 fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder Created');
});
 */

// Create and write a file: =========
/* fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello world',
  (err) => {
    if (err) throw err;
    console.log('Hello.text created and written');

    // File append: =========
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' Appended text to hello world!',
      (err) => {
        if (err) throw err;
        console.log('Hello.text created and written');
      }
    );
  }
);
*/

// Read file =========
/*fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

// Change file name =========
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'hello2.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed!');
  }
);
