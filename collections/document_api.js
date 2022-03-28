const express = require('express');

const router = express.Router()

const documentModel = require('../models/documentModel')

//Add Document
router.post(`/addDocument`, async (req, res) => {

    const newDocument = new documentModel(req.body)
    try {
        const saveDocument = await newDocument.save()
        res.status(200).json(saveDocument)

    } catch (err) {
        res.status(400).json(err)
    }

})
//update

router.put(`/:id`, async (req, res) => {

    try {
        const updateDocument = await documentModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,

        }, { new: true }
        )
        res.status(200).json(updateDocument)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete

router.delete(`/delete/:id`, async (req, res) => {
    try {
        await documentModel.findByIdAndDelete(req.params.id)
        res.status(200).json(`Document  successfully deleted`)

    } catch (err) {
        res.status(500).json(err)
    }
})


router.get(`/find/:id`, async (req, res) => {
    try {
        const dbResponse = await documentModel.findById(req.params.id)


        res.status(200).json(dbResponse)

    } catch (err) {
        res.status(500).json(err)
    }
})
//all document
router.get(`/viewall`, async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let dbResponse
        if (qNew) {
            dbResponse = await documentModel.find().sort({ createdAt: -1 }).limit(5)

        }
        // else if (qCategory) {
        //     dbResponse = await documentModel.find({
        //         categories: {
        //             $in: [qCategory],
        //         }
        //     })
        // }
        else {
            dbResponse = await documentModel.find()
        }

        res.status(200).json(dbResponse)

    } catch (err) {
        res.status(500).json(err)
    }
})






module.exports = router