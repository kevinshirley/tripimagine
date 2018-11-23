const express = require('express');
const router = express.Router();
const passport = require('passport');
const isEmpty = require('../../validation/is-empty');
var cloudinary = require('cloudinary');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

// set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, (file.fieldname + '-' + Date.now() + path.extname(file.originalname)));
  }
});

// check file type
function checkFileType(file, cb) {
  // allowed ext
  const filetypes = /jpeg|jpg|png|gif|doc|txt|docx|pdf|md|pptx|mp4/;
  // check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // check mime
  const mimetype = filetypes.test(file.mimetype);

  let result;

  if (mimetype && extname) {
    result = cb(null, true);
  } else {
    result = cb('Error: Not an accepted file type.');
  }

  return result;
}

// init upload
let upload = multer({ 
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single('document');

// time
function formatTime(date, time) {
  let dateFormated;
  let timeFormated;
  let dateTimeFormated;

  dateFormated = date.replace(/\//g, "");
  timeFormated = time.replace(/:/g, "");
  timeFormated = timeFormated.replace(" ", "");
  timeFormated = timeFormated.replace("AM", "");
  
  dateTimeFormated = dateFormated+"-"+timeFormated;

  return dateTimeFormated;
}

router.post('/upload', (req, res) => {
  cloudinary.config({ 
    cloud_name: 'tripimagine', 
    api_key: '729715899949243', 
    api_secret: 'D20p7_BuM7XKxFjS5amr4wDtzho'
  });

  upload(req, res, (err) => {
    let result;
    if (err instanceof multer.MulterError) {
      result = res.status(404).json({ multerError: err });
    } else if (err) {
      result = res.status(404).json({ error: err });
    } else {

      if (isEmpty(req.file)) {
        result = res.status(404).json({ error: 'Error: No file Selected.' });
      } else {
        cloudinary.v2.uploader.upload(req.file.destination+'/'+req.file.filename, { resource_type: "raw", public_id: req.body.handle+"/"+req.body.labelValue+"/"+req.file.filename }, function(error, result) {
          console.log(result, error);

          let when = moment().startOf('hour').fromNow();

          // delete uploaded file from local directory
          const directory = 'client/public/uploads/';
          fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });

          // send data of upload
          result = res.json({ 
            cloudUrl: result.url,
            dateWhen: when,
            body: req.body
          });

        });
      }

    }

    return result;
  });

});

module.exports = router;