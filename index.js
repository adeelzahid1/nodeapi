import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 7000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('TEST !!');
    res.send('Hello From Home Page .... ');
});


app.listen(PORT, () => console.log(`Server is running on port : http://localhost:${PORT}`));