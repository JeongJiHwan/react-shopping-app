const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data: {
        type: Array,
        default: []
    },
    product: {
        type: Array,
        default: []
    }
}, {timestammps: true})



const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = { Payment }