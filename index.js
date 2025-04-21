import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
const API_KEY = process.env.API_KEY || 'default_key';
const API_SECRET = process.env.API_SECRET || 'default_secret';
const API_URL = process.env.API_URL || 'https://api.example.com';


app.get('/', (req, res) => {

    res.send('Hello World!')

});

app.get('/api/:name', (req, res) => {

    res.send(req.params.name)

}); 







app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`API Key: ${API_KEY}`);
  console.log(`API Secret: ${API_SECRET}`);
  console.log(`API URL: ${API_URL}`);
})