import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!\n');
});

app.all('/', (req, res) => {
    res.status(404).send('404 Not Found\n');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});