const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));

const dbURI = 'mongodb+srv://bbUser:<B2021ipasha$>@atlascluster.6oa0mfv.mongodb.net/?retryWrites=true&w=majority';
