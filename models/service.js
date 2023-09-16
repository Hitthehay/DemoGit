
// Định nghĩa schema và model cho collection 'rooms'
const serviceSchema = new mongoose.Schema({
    name: String,
    group: String,
    type: String,
    price: Number,
    deposit: Number,
    debt: Number,
    renter: Number,
    day_of_hire: Date,
    expiration_date: Date,
    status: String,
    services: [{
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
    },
        quantity: Number,
    }],
    sort: Number,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Service = mongoose.model('Service',serviceSchema)

module.exports = Service
