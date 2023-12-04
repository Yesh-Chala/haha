

const http = require('http');
const cors = require('cors'); 
const {run,upload,retrieve,clearCollection} = require('./connect');

exports.handler = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === '/') {
    res.end(JSON.stringify({ message: 'Hello, World! This is the root route.' }));
  } else if (req.url === '/api') {
    // Uncomment the following lines when you're ready to include the actual logic
    // await run()
    // const results = await retrieve();
    res.end(JSON.stringify({ message: 'Hello, World! This is the root kbigugchguiyftxgfchvju.' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: '404 Not Found' }));
  }
};





// exports.handler = async (event, context) => {
//   try {
//     const response = {
//       statusCode: 200,
//       headers: { 'Content-Type': 'application/json' },
//     };

//     if (event.path === '/') {
//       response.body = 'Hello, World! This is the root route.\n';
//     } else if (event.path === '/api') {
//       response.body = 'Hello, World! This is the /api route.\n';
//       await run();
//       // const results = await retrieve();
//       // response.body = JSON.stringify(results);
//     } else {
//       response.statusCode = 404;
//       response.body = '404 Not Found\n';
//     }

//     return response;
//   } catch (error) {
//     console.error('Error:', error);

//     return {
//       statusCode: 500,
//       body: 'Internal Server Error',
//     };
//   }
// };


// exports.handler = http.createServer( async(req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   if (req.url === '/') {
//     res.end('Hello, World! This is the root route.\n');
//   } else if (req.url === '/api') {
//     res.end('Hello, World! This is the /api route.\n');
//     await run();
//     // await clearCollection();
//     // await upload();
//     results = await retrieve();
//     // console.log(results);
//     // // const js = results.slice(0, 4).map(item => JSON.parse(item));
//     // // const js= JSON.parse(results);
//     // // console.log(js);
//     res.end(results);
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('404 Not Found\n');
//   }
// });

const port = 3000;

// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// module.exports.handler = server;
























// const express = require('express');
// const serverless = require('serverless-http');
// const cors = require('cors'); 
// const app = express();
// const router = express.Router();
// const mongoose = require('mongoose');
// const PORT = process.env.PORT || 3000;
// const {run,upload,retrieve,clearCollection} = require('./connect')

// // Enable CORS for all routes


// app.use(cors());
// app.use(express.json({ spaces: 2 }));
// router.get('/', (req, res) => {
//   res.json({
//     welcome: 'Hello world json',
//   });
// });

// router.get('/api',async (req, res) => {
//   // const jsonData = require('../public/data.json');
//   await run();
//   // await clearCollection();
//   // await upload();
//   results = await retrieve();
//   // console.log(results);
//   // // const js = results.slice(0, 4).map(item => JSON.parse(item));
//   // // const js= JSON.parse(results);
//   // // console.log(js);
//   res.json(results);
// });

// router.get('/json', (req, res) => {
//   res.json({
//     welcome: 'Hello world',
//   });
// });

// app.use('/', router); // Adjust the base path to match your Netlify function route

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// module.exports.handler = serverless(app);
