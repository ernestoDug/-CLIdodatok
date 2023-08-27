
const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(router);

app.listen(3000, () => console.log("app: 3000") );




//   npm run start   
// npm run dev