const express = require('express')
const router = express.Router()
const { getMe, updateMe, addMoreDetail, educationDetail,employementDetail,updateEducationDetail,updateEmploymentDetail,logout, addUserSkill } = require('../controllers/userController')
const { isLoggedin } = require('../controllers/authController')

router.get('/', isLoggedin, getMe)
router.put('/', isLoggedin, updateMe)
router.post('/addDetails', isLoggedin, addMoreDetail)
router.post('/educationDetail', isLoggedin, educationDetail)
router.put('/educationDetail/:id',isLoggedin,updateEducationDetail)
router.post('/employment',isLoggedin,employementDetail)
router.put('/employment/:id',isLoggedin,updateEmploymentDetail)
router.post('/addUserSkill', isLoggedin,addUserSkill)

module.exports = router