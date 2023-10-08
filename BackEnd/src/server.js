import express from 'express';
require('dotenv').config();

import connectBD from './config/connectDB';
import initRouter from './routes/index';

const app = express();

// app.use('/', (req, res) => {
//     res.send('Hello');
// });

connectBD();

initRouter(app);

app.listen(8080, () => {
    console.log('Server is running on port : ', 8080);
});
