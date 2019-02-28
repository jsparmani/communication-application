const express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/users/login');
}

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: '../uploads/imageUploads',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}



router.post('/upload',ensureAuthenticated, (req, res) => {
  upload(req, res, (err) => {
    console.log('Uploading File ..')
    if(err){
      console.log(err);
      res.render('file', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        console.log('No File was Selected')
        res.render('file', {
          msg: 'Error: No File Selected!'
        });
      } else {
        console.log('File Uploaded Succesfully');
        res.render('file', {
          msg: 'File Uploaded! Succesfully ',
        });
      }
    }
  });
});

module.exports = router;