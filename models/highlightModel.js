const mongoose = require('mongoose')


// page_id: ObjectId,
//     note: string,
//         startLocation: number,
//             endLocation: number,
//                 tags: Array < string > 

const highlightSchema = new mongoose.Schema({
    page_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'page_model'

    },
    note: {
        type: String

    },
    startLocation: {
        type: Number
    },
    endLocation: {
        type: Number
    },
    tags: {
        type: String
    }
})

const highlightModel = mongoose.model('hightlight_model', highlightSchema)
module.exports = highlightModel