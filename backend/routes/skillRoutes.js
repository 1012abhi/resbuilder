const express = require('express')
const router = express.Router()
const { addSkill,getSkills} = require('../controllers/skillController')


router.post('/skill', addSkill)
router.get('/skill', getSkills)



module.exports = router