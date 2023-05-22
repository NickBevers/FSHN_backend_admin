const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    articleNumber: {
        type: String,
        required: true
    },
    headImage: {
        type: String,
        required: true
    },
    subImages: {
        type: Array,
        required: true
    },
    sizes: {
        type: Array,
        required: true
    },
    colors: {
        type: Array,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    materials: {
        type: Array,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    subCategories: {
        type: Array,
        required: true
    },
    collectionStore: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    }
});

const Clothing = mongoose.model('Clothing', clothingSchema);

module.exports = Clothing;