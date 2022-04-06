const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.static('public'));
app.use('/db', express.static('db'));
app.use(cors())

app.use(express.json())

app.get('/', (require, response) => {
	response.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

