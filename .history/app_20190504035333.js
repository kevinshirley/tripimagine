const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('tripimagine.com.file.key', 'utf8');
var certificate = fs.readFileSync('www_tripimagine_com.crt', 'utf8');
// routes
const atlas = require('./routes/api/atlas');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const contact = require('./routes/api/contact');
const about = require('./routes/api/about');
const tripForm = require('./routes/api/tripform');
var home = require('./routes/api/home');
var files = require('./routes/api/files');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// passport middleware  
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

// use routes
app.use('/users', users);
app.use('/profile', profile);
app.use('/atlas', atlas);
app.use('/contact', contact);
app.use('/about', about);
app.use('/trip-form', tripForm);
app.use('/', home);
app.use('/files', files);

// server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// ssl
const credentials = {key: privateKey, cert: certificate};
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
