const express = require('express')
const { PostCvData, GetCvData, GetObjDataFunc, UpdateJob, UpdateAcademic, UpdateIntro, UpdatePersonal } = require('../controllers/user.controller')
const router = express.Router()

router.post('/cv-data', PostCvData)
router.get('/get-cv-data/:objectId', GetCvData)
router.patch('/update-job/:userid', UpdateJob)
router.patch('/update-academic/:userid', UpdateAcademic)
router.patch('/update-intro/:userid', UpdateIntro)
router.patch('/update-personal/:userid', UpdatePersonal)

module.exports = router