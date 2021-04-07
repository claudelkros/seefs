const e = require('express');
const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, `${__dirname}/../../frontend/public/uploads/`)
	},
	filename: function (req, file, cb) {
		const ext = path.extname(file.originalname);
		const filePath = file.originalname + '-' + Date.now() + ext;
		cb(null, filePath);
	}
  })
  
const uploadStorage = multer({ storage: storage })

module.exports = uploadStorage
