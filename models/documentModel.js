const mongoose = require('mongoose');


const documentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false

    },
    is_modified: {
        type: Boolean,
        default: false

    },
    is_shared: {
        type: Boolean,
        default: false

    },
    // document_category_id: {
    //     type: ObjectId,
    //     required: true,

    // },
    // asset_class_id: {
    //     type: ObjectId

    // },
    // sub_asset_class_id: {
    //     type: ObjectId
    //  },
    asset_ids: {
        type: Array
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'

    // },
    // facility_id: {
    //     type: ObjectId
    // },
    // company_Id: {
    //     type: ObjectId
    // },

    description: {
        type: String,
        required: true
    },
    size: {
        type: Number,

    },
    doc_type: {
        type: String
    },

    path: {
        type: String
    }



}, { timestamps: true })
const documentModel = mongoose.model(`document_model`, documentSchema)
module.exports = documentModel