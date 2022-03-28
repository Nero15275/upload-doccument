const mongoose = require('mongoose');

// _id: ObjectId
// document_id: ObjectId,
//     type: "file" | "image" | "audio",
//         data: Array < Page > | Image | Audio


const contentSchema = new mongoose.Schema({
    document_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'document_model'
    },
    doc_type: {
        type: String

    },
    data: {
        type: Array

    }

})
const contentModel = new mongoose.model('content_model', contentSchema)
module.exports = contentModel