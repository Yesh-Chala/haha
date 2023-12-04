const http = require('http');
const cors = require('cors'); 
const {run,upload,retrieve,clearCollection} = require('./connect');
const { json } = require('express');


const server = http.createServer( async(req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if (req.url === '/') {
    res.end('Hello, World! This is the root route.\n');
  } else if (req.url === '/api') {
    res.end('Hello, World! This is the /api route.\n');
    await run();
    // await clearCollection();
    // await upload();
    results = await retrieve();
    // console.log(results);
    // // const js = results.slice(0, 4).map(item => JSON.parse(item));
    // // const js= JSON.parse(results);
    // // console.log(js);
    res.end(results);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found\n');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
