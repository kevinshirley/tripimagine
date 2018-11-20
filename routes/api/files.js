const express = require('express');
const router = express.Router();
const passport = require('passport');
const isEmpty = require('../../validation/is-empty');
var cloudinary = require('cloudinary');
// const fileUpload = require('express-fileupload');
const multer = require('multer');
const path = require('path');

// set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// init upload
// const upload = multer({
//   storage: storage
// }).fields([{
//   name: 'file'
// }, {
//   name: 'filename'
// }]);
// const upload = multer({
//   storage: storage
// }).single('avatar');
const upload = multer({ storage });

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

// router.use(fileUpload());

router.post('/upload', upload.single('avatar'), (req, res) => {
  // const errors = {};
  // const notValid = isEmpty(req.body);

  // check validation
  // if (notValid) {
  //   errors.error = 'The object is empty';
  //   return res.status(400).json(errors);
  // }

  // sample upload code
  // cloudinary.uploader.upload("sample.jpg", {"crop":"limit","tags":"samples","width":3000,"height":2000}, function(result) { console.log(result) });

  // sample image manipulation tag
  // cloudinary.image("sample", {"crop":"fill","gravity":"faces","width":300,"height":200,"format":"jpg"});

  // cloudinary.config({ 
  //   cloud_name: 'tripimagine', 
  //   api_key: '874837483274837', 
  //   api_secret: 'a676b67565c6767a6767d6767f676fe1' 
  // });

  // cloudinary.v2.uploader.upload("my_picture.jpg", 
  // function(error, result) {console.log(result, error)});

  // let imageFile = req.files;

  // imageFile.mv(`${__dirname}/client/src/assets/${req.body.filename}.png`, function(err) {
  //   if (err) {
  //     return res.status(500).send({mvError: err});
  //   }

  //   res.json({file: `client/src/assets/${req.body.filename}.png`});
  // });

  // upload(req, res, (err) => {
  //   if (err) {
  //     return res.json({ msg: err });
  //   } else {
  //     console.log(req.file);
  //     return res.json({ msg: 'test' });
  //   }
  // });

  console.log(req.file);
  console.log(req.files);
  console.log(req.body);
  res.send();

  // return res.json({ file: req.files, body: req.body });
});

module.exports = router;