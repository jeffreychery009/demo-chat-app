const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})
