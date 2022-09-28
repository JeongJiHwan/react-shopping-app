const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxLength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    },

    continents:{
        type: Number,
        default: 1
    }
}, {timestammps: true})

ProductSchema.index({
    title:'text',
    description: 'text'
}, {
    weights:{
        title: 5,
        description: 1
    }
})



const Product = mongoose.model('Product', ProductSchema);

module.exports = { Product }