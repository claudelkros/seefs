const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const upload = require('../middleware/upload')
const Student = require("../../models/Students.model");
const e = require("express");


router.get("/", async(req, res, next) => {
    try {
        const student = await Student.find({});
        res.status(200).json(student);
    } catch (error) {
        next(error);
    }
});

router.post("/signup", async(req, res, next) => {
    if (!req.body) {
        return res.status(422).json({ error: "please add all the fields" });
    }

    try {
        // Check if this student already exisits
        const student = await Student.findOne({
            matricule: req.body.matricule,
        });

        if (!student) {
            const newStudent = new Student(req.body);
            const inserted = await newStudent.save();

            //return json
            res.status(200).json({
                message: "Signup done successfully",
                response: inserted,
            });
        } else {
            return res.status(400).send("Username already use ");
        }
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findOne({
            _id: id,
        });

        if (!student) {
            res.json({ message: "student don't exit " });
        } else {
            await Student.deleteOne({ _id: id });
            res.json({ message: "Delete Sucessful" });
        }
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findOne({
            _id: id,
        });

        if (!student) {
            res.json({ message: "student don't exit " });
        } else {
            //await Files.deleteOne({ _id: id });
            res.json(student);
        }
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async(req, res, next) => {
    try {
        const { id } = req.params;

        const oldUser = await Student.findOne({
            _id: id,
        });

        if (!oldUser)
            return res.status(401).json({ message: "invalid credentials" });

        if (req.params.files.type == "Autorisation de soutenance") {
            const Newuser = await Student.updateOne({
                _id: id,
                autorisation: true,
            });
            res.status(200).json({ message: "Update successfuly" });
        }
    } catch (error) {
        next(error);
    }
});

//if we upload file name 
//statusInfos = ["Autorisation de soutenance", "Mémoire finale", "Quitus de paiement"], 
//we changes Autorization status, Asoutenu status, Version status

//req.body.typeOfFile == "Au" ? 
router.post("/status/:id", upload.single('file'), async(req, res, next) => {
    try {
        const { id } = req.params;
        const filter = { _id: id };
        if (req.file == undefined) {
            res.json({ message: "Aucun fichier uploader" })
        } else if (req.body.typeOfFile == "Autorisation de soutenance") {
            const files = req.file.originalname;
            const type = req.body.typeOfFile;
            const filePath = req.file.filename
            const year = req.body.academicYear;

            let updUser = await Student.findOneAndUpdate(
                filter, {
                    $set: {
                        autorisation: true,
                    },
                    $push: {
                        files: { files, year, type, filePath }
                    }
                }, {
                    new: true
                }
            );
            res.json(updUser);
        } else if (req.body.typeOfFile == "Mémoire finale") {
            const files = req.file.originalname;
            const type = req.body.typeOfFile;
            const year = req.body.academicYear;
            const filePath = req.file.filename

            let updUser = await Student.findOneAndUpdate(
                filter, {
                    $set: {
                        versionFinale: true,
                        aSoutenu: true
                    },
                    $push: {
                        files: { files, year, type, filePath }
                    }
                }, {
                    new: true
                }
            );
            res.json(updUser);
        } else if (req.body.typeOfFile == "Quitus de paiement") {
            const files = req.file.originalname;
            const type = req.body.typeOfFile;
            const year = req.body.academicYear;
            const filePath = req.file.filename

            let updUser = await Student.findOneAndUpdate(
                filter, {
                    $set: {
                        paiement: true,
                    },
                    $push: {
                        files: { files, year, type, filePath }
                    }
                }, {
                    new: true
                }
            );
            res.json(updUser);
        } else if (req.body.typeOfFile == "Decision de selection") {
            const files = req.file.originalname;
            const type = req.body.typeOfFile;
            const year = req.body.academicYear;
            const filePath = req.file.filename

            let updUser = await Student.findOneAndUpdate(
                filter, {
                    $set: {
                        decisionSelection: true,
                    },
                    $push: {
                        files: { files, year, type, filePath }
                    }
                }, {
                    new: true
                }
            );
            res.json(updUser);
        } else {
            res.json({ infos: req.file, message: "Aucun fichier uploader", file: req.body })
        }

    } catch (error) {
        next(error)
    }
})

module.exports = router;