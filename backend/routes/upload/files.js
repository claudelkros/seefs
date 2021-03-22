const express = require('express')
const router = express.Router()
const dotenv = require("dotenv");
dotenv.config();
const upload = require('../middleware/upload')
const Files = require('../../models/file.model');
const auth = require('../../middlewares/auth')




router.post('/', auth, upload.single('file'), (req, res, next) => {

  if (req.file == undefined) {
    res.status(422).json({ error: 'Error: the file is required' });
  } else if (req.body.typeOfFile == null || req.body.academicYear == null) {
    res.status(422).json({infos: res, error: 'Error: Please check the required fields' });
  } else {
    const newFile = new Files({
      file: req.file.originalname,
      academicYear: req.body.academicYear,
      typeOfFile: req.body.typeOfFile,
      filePath: req.file.fieldname
    })

    newFile
      .save()
      .then(() => res.json({message : "Upload successfuly"}))
      .catch((err) => res.status(400).json(err))
  }
})



router.get('/',auth , async (req, res, next) => {
  try {
    const files = await Files.find({});
    res.status(200).json(files)
  } catch (error) {
    next(error);
  }
})

router.delete('/:id',auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const files = await Files.findOne({
      _id: id,
    });

    if (!files) {
      res.json({ message: 'Files don\'t exit ' })
    } else {
      await Files.deleteOne({ _id: id });
      res.json({ message: 'Delete Sucessful' })
    }
  } catch (error) {
    next(error)
  }
});


router.get('/:id', auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const files = await Files.findOne({
      _id: id,
    });

    if (!files) {
      res.json({ message: 'Files don\'t exit ' })
    } else {
      //await Files.deleteOne({ _id: id });
      res.json(files)
    }
  } catch (error) {
    next(error)
  }
});

router.put('/:id',auth, async (req, res, next) => {
  try {
    const { id } = req.params;

    const oldUser = await User.findOne({
      _id: id,
    });

    if (!oldUser) return res.status(401).json({message: "invalid credentials"});

    const Newuser = await User.updateOne({
      _id: id,
    });
    res.status(200).json({message : "Update successfuly"});

  } catch (error) {
    next(error)
  }
});

module.exports = router