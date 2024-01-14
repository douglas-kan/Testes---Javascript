var express = require('express');

app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose')
livro = require('./api/models/livroModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://youtube:youtube@cluster0.kjh8l.gcp.mongodb.net/youtube?retryWrites=true&w=majority')


app.use(bodyPaser.urlencoded({extended: true}));
app.use(bodyPaser.json());

var routes = require('.api/routes/livroRoutes');
routes(app);

app.listen(port);