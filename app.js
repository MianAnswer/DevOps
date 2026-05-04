import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!\n');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK\n');
});

app.use('/', (req, res) => {
    res.status(404).send('404 Not Found\n');
});

export default app;