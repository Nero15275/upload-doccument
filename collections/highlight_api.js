const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router()
const highlightModel = require('../models/highlightModel');

router.post('/addnote', async (req, res) => {

    const highlightInfo = new highlightModel(req.body)
    try {
        const saveInfo = await highlightInfo.save()
        res.status(200).json(saveInfo)
    } catch (err) {
        res.status(400).json(err)
    }

})

//get highlighted info
router.get('/getinfo/:id', async (req, res) => {
    const page_id = req.params.id
    try {
        const dbresponse = highlightModel.findOne(page_id)
        req.status(200).json(dbresponse)
    } catch (err) {
        res.status(400).json(err)
    }

})

module.exports = router