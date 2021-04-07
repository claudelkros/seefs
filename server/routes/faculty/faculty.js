const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
const auth = require('../../middlewares/auth')
const Faculties = require('../../models/Faculty.model')

router.get('/', async(req, res, next) => {
    try{  
        const faculties = await Faculties.find({})
        res.status(200).json(faculties)
    }catch(error){
        next(error)
    }
})

router.post('/', auth, async(req, res, next) => {
    try{
        const {name, departement} = req.body
        const faculty = new Faculties({
            name, 
            departement
        })
        const fac = await faculty.save()
        res.status(200).json({
            "faculty": fac
        })
    }catch(error){
        next(error)
    }

})


module.exports = router