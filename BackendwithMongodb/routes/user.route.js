const express = require('express')
const { PostCvData, GetCvData, GetObjDataFunc } = require('../controllers/user.controller')
const router = express.Router()

router.post('/cv-data', PostCvData)
// router.get('/receive-cv-data', GetCvData)
router.get('/getobjdata/:id', GetObjDataFunc)

module.exports = router