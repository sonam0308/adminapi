

const express = require('express')
const router = express.Router();
const leadCtrl = require('../controller/leads')
const verify = require('../utils/verify');


router.post('/createLead', verify, leadCtrl.createLead)

router.put('/getallLead/:id', verify, leadCtrl.updateLead)
router.get('/getallLead', verify, leadCtrl.getAll)
router.get('/getallLead/:id', verify, leadCtrl.getSinglead)
router.delete('/getallLead/:id', verify, leadCtrl.deleteLead)



module.exports = router
