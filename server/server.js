const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');

//Heroku dynamic port
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//match all unmatched routes
app.get('*', (req, res) => {
    //if no route url found, serve index.html NEEDED
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up');
});