const fs = require('fs');

fs.writeFileSync('hello.txt', 'Hello from Node.js!',(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  