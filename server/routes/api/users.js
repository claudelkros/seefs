const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
//const auth = require('../../middleware/auth')
const User = require("../../models/Users.model");

const e = require("express");

/**
 * @swagger
 * /api/users/:
 *   get:
 *     tags:
 *       - Users
 *     name: get
 *     summary: Affiche tous les utilisateurs dans la BD
 *     consumes:
 *       - application/json
 *     responses:
 *       200:
 *         description: User found and logged in successfully
 *       401:
 *         description: Bad username, not found in db
 *       403:
 *         description: Username and password don't match
 */
router.get("/", async (req, res, next) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
});

// Add User

/**

 * @swagger
 * /api/users/signup:
 *   post:
 *     tags:
 *       - Users
 *     name: Singup
 *     summary: Enreigistrer un nouvel utilisateur
 *     description: exemple des parametres sexe[Masculin, Feminin], profession[Etudiant, Enseignant, Fonctionnaire, Ingenieur], dateDeNaissance"1990-10-09T23:00:00.000Z"
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#'
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             user_name:
 *               type: string
 *             password:
 *               type: string
 *             first_name:
 *               type: string
 *             birth_date:
 *               type: Date
 *             is_staff:
 *               type: Boolean
 *             is_student:
 *               type: Boolean
 *             is_teacher:
 *               type: Boolean
 *             is_active:
 *               type: Boolean
 *             sexe:
 *               type: string
 *             departement:
 *               type: string
 *         required:
 *           - email
 *           - user_name
 *           - password
 *           - first_name
 *           - birth_date
 *           - is_staff
 *           - is_student
 *           - is_teacher
 *           - is_active
 *           - sexe
 *           - departement
 *     responses:
 *       200:
 *         description: User found and logged in successfully
 *       401:
 *         description: Bad username, not found in db
 *       403:
 *         description: Username and password don't match
 */
router.post("/signup", async (req, res, next) => {
	const { email, password, first_name, last_name, departement } = req.body;
	// First Validate The Request
	pwd = bcrypt.hash(req.body.password, 20);
	//const { errors } = await Schema.validateAsync(req.body);
	if (!email || !password || !first_name || !last_name || !departement) {
		return res.status(422).json({ error: "please add all the fields" });
	}

	try {
		// Check if this user already exisits
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			//Insert the new user
			const salt = await bcrypt.genSalt();
			const hashedpassword = await bcrypt.hash(password, salt);

			//  bcrypt.hash(req.body.motDePasse, 12)
			//  .then(hashedmotDePasse =>{
			const newUser = new User({
				email,
				password: hashedpassword,
				first_name,
				last_name,
				departement,
			});
			const inserted = await newUser.save();

			const token = jwt.sign(
				{ id: inserted._id },
				process.env.JWT_SECRET
			);

			//return json
			res.status(200).json({
				token,
				user: {
					email,
					password: hashedpassword,
					first_name,
					last_name,
					departement,
				},
			});
		} else {
			//Insert the new user
			return res.status(400).send("Username already use ");
		}
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const users = await User.findOne({
			_id: id,
		});
    
		if (!users) {
			res.json({ message: "Users don't exit " });
		} else {
			await User.deleteOne({ _id: id });
			res.json({ message: "Delete Sucessful" });
		}
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const users = await User.findOne({
			_id: id,
		});

		if (!users) {
			res.json({ message: "Users don't exit " });
		} else {
			//await Files.deleteOne({ _id: id });
			res.json(users);
		}
	} catch (error) {
		next(error);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;

    const oldUser = await User.findOne({
      _id: id,
    });


		if (!oldUser)
			return res.status(401).json({ message: "invalid credentials" });
		const Newuser = await User.updateOne({
			_id: id,
		});
		res.status(200).json({ message: "Update successfuly" });
	} catch (error) {
		next(error);
	}
});
// Signin with username and motDePasse

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     tags:
 *       - Users
 *     name: Singin
 *     summary: Connection d'un nouvel utilisateur
 *     description: Permet a un utilisateur de se connecter en utilisant le nom d'utilisateur et le mot de passe
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             user_name:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - user_name
 *           - password
 *     responses:
 *       200:
 *         description: User found and logged in successfully
 *       401:
 *         description: Bad username, not found in db
 *       403:
 *         description: Username and password don't match
 */
router.post("/signin", async (req, res, next) => {
	const { email, password } = req.body;
	if (!email) {
		res.status(422).json({ error: "Please add email" });
	} else if (!password) {
		res.status(422).json({ error: "Please add motDePasse" });
	}

	try {
		const user = await User.findOne({ email: email });

		if (!user) {
			res.status(422).json({ error: "Invalid username or password" });
		}

		const Ismatch = await bcrypt.compare(password, user.password);

		if (!Ismatch)
			return res.status(400).json({ message: "Invalid credentials" });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

		res.status(200).json({
			token,
			user: {
				id: user._id,
				email: user.email,
			},
		});
	} catch (e) {
		return e;
	}
});

//valid token

/**
 * @swagger
 * /api/users/validtoken:
 *   post:
 *     tags:
 *       - Users
 *     name: Affiche les informations via le token
 *     summary: Affiche les informations d'un utilisateur avec un token valid
 *     security:
 *       - token: []
 *     consumes:
 *       - application/json
 *     parameters:
 *         schema:
 *           $ref: '#'
 *           type: object
 *           properties:
 *             nom:
 *               type: string
 *             prenom:
 *               type: string
 *             nomUtilisateur:
 *               type: string
 *             sexe:
 *               type: string
 *             dateDeNaissance:
 *               type: string
 *             profession:
 *               type: string
 *             centreInteret:
 *               type: array
 *     responses:
 *       200:
 *         description: User found and logged in successfully
 *       401:
 *         description: Bad username, not found in db
 *       403:
 *         description: Username and password don't match
 */

router.post("/validtoken", async (req, res) => {
  

	try {
    const token = req.header("Authorization");
    
		if (!token) return res.status(400).json("Token absent");


		const verified = jwt.verify(token, process.env.JWT_SECRET);

		if (!verified) return res.status(400).json("Token not verified");
		const user = await User.findById(verified.id);

		if (!user)
			return res
				.status(400)
				.json("Token not valid for this user anymore");
		return res.json(user);
	} catch (erro) {
		return erro;
	}
});




module.exports = router;
