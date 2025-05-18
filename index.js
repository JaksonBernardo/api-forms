import express from 'express';

import { port, database, jwtSecret, apiKey } from './src/config/env.js';

const app = express();

app.get('/', (req, res) => {

    res.send('Hello World!')

});


app.listen(port, () => {
    console.log(`Server is running on http://${database.host}:${database.port}`);
})