const mongoose = require('mongoose');

// _id: ObjectId

// content_id: ObjectId
// text: string,
//     index: number,

const pageSchema = new mongoose.Schema({
    content_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'content_model'
    },
    text: {
        type: String
    },
    index: {
        type: Number

    }
})
const pageModel = new mongoose.model('page_model', pageSchema)
module.exports = pageModel