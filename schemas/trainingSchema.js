const mongoose = require('mongoose');
const {Schema} = mongoose;

// const trainingSchema = Schema({
//     // _id: Schema.Types.ObjectId,
//     // trainingType: String,
//     // duration: String,
//     // accommodation: String
//     // trainings: [{ type: Schema.Types.ObjectId, ref: "Booking"}]
//     first: {
//         type: String
//     },
//     last: {
//         type: String
//     }
// }, {
//     versionKey: false
// });

const trainingSchema = Schema({
    trainingType: {
        type: String
    },
    duration: {
        type: String
    },
    accommodation: {
        type: String
    }
}, 
{
    versionKey: false
});

const Training = mongoose.model("Training", trainingSchema, 'trainings')
module.exports = Training;