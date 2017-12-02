const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use()
app.get('/api/json', (req, res) => {
	console.log(request.body)

});

function nodeText(text) {

}


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
