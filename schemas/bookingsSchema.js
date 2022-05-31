const mongoose = require('mongoose');
const {Schema} = mongoose;

const bookingsSchema = Schema({
    // _id: Schema.Types.ObjectId,
    // trainingType: String,
    // duration: String,
    // accommodation: String,
    trainingType: {
        type: String
    },
    duration: {
        type: String
    },
    accommodation: {
        type: String
    },
    firstName: String,
    lastName: String,
    country: String,
    city: String,
    street: String,
    postcode: String,
    phone: Number,
    email: String,
    note: String
    // trainings: [{ type: Schema.Types.ObjectId, ref: "Training"}]
}, {
    versionKey: false
});

const Bookings = mongoose.model("Bookings", bookingsSchema, 'bookings');
module.exports = Bookings;