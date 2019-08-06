const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('./tripimagine.com.file.key', 'utf8');
const certificate = fs.readFileSync('./www_tripimagine_com.crt', 'utf8');
// routes
const atlas = require('./routes/api/atlas');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const contact = require('./routes/api/contact');
const about = require('./routes/api/about');
const tripForm = require('./routes/api/tripform');
const contentful = require('./routes/api/contentful');
const home = require('./routes/api/home');
const files = require('./routes/api/files');

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
app.use('/contentful', contentful);

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
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// const port = process.env.PORT || 5000;
const httpPort = 5000;
const httpsPort = 5005;

// app.listen(port, () => console.log(`Server running on port ${port}`));
httpServer.listen(httpPort, () => console.log(`HTTP Server running on port ${httpPort}`));
httpsServer.listen(httpsPort, () => console.log(`HTTPS Server running on port ${httpsPort}`));
