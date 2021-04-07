const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
const Admin = require('../../models/Admin.model')
const auth = require('../../middlewares/auth')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


/**
 * @param null
 */
router.get('/', auth, async(req, res, next) => {
    try{
        const admin = await Admin.find({})
        res.status(200).json(admin)
    }catch(error){
        next(error) 
    }
})

/**
 * Sign up for new SubAdministrator
 * @param email
 * @param fullname
 * @param password
 * @param passwordVerif
 * @param role
 * @returns token, {username, email, password, role}
 */
router.post('/signup', async(req, res, next) => {
    const {email, fullName, password, passwordVerif, role} = req.body
    try{
        const user = await Admin.findOne({email: email})
        if(!user){
            const salt = await bcrypt.genSalt();
            pwd = await bcrypt.hash(req.body.password, salt)
            if(password != passwordVerif){
                res.status(406).json({"error": "les mots de passe doivent être identiques"})
            }

            admin = new Admin({
                email,
                fullName,
                password: pwd,  
                role
            })
            const insert = await admin.save();

            res.status(200).json({
                user: insert,
            });
        }else{
            res.status(406).json({"error": "Cette adresse mail est déja utilisé"})
        }

    }catch(error){
        next(error)
    }
})
/**
 * Signin for SubAdministrator 
 * @param email
 * @param password
 * @return [status(200)][json("message": UserInfo)]
 */
router.post('/signin', async (req, res, next) => {
    const { email, password } = req.body
    if (!email) {
      res.status(422).json({ error: "Please add email" })
    } else if (!password) {
      res.status(422).json({ error: "Please add password" })
    }

    try {
      const user = await Admin.findOne({ email: email })

      if (!user) {
        res.status(422).json({ error: "Invalid password or email" })
      }

      const Ismatch = await bcrypt.compare(password, user.password)

      if (!Ismatch) return res.status(400).json({ message: "Invalid credentials" })

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

      res.status(200).json({
        token,
        user: {
          id: user._id,
          nomUtilisateur: user.nomUtilisateur
        },
      })
    } catch (e) {
      next (e);
    }
  }
)

/**
 * Delete User Admin
 * @param id
 * @return [json("user delete")]
 */
router.delete('/:id',auth, async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await Admin.findOne({
        _id: id,
      });
  
      if (!user) {
        res.json({ message: 'ID don\'t exit ' })
      } else {
        await Admin.deleteOne({ _id: id });
        res.json({ message: 'Delete Sucessful' })
      }
    } catch (error) {
      next(error)
    }
  });

/**
 * Sign up for new SubAdministrator
 * @param email
 * @param fullname
 * @param role
 * @returns token, {username, email, password, role}
 */
router.put('/:id',auth, async (req, res, next) => {
    try {
        const { id } = req.params;
        const { email, fullName, role } = req.body

        if (!email || !fullName || !role) {
        return res.status(422).json({ error: "please add all the fields" })
        }

        const oldUser = await Admin.findOne({
        _id: id,
        });

        if (!oldUser) return res.status(401).json({message: "invalid credentials"});

        const Newuser = await Admin.updateOne({
        _id: id,
        }, {
            $set: {
                email,
                fullName,
                role
            },
        });
        res.status(200).json({message : "Update successfuly"});

    } catch (error) {
        next(error)
    }
});

module.exports = router

