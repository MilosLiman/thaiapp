const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo = require('mongo');

const bodyParser = require('body-parser');
const { Db } = require('mongodb');
const port = 3000;


app.use(express.static('public'));

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const Message = require('./schemas/messageSchema');
const Booking = require('./schemas/bookingsSchema');
const Training = require('./schemas/trainingSchema');

mongoose.connect('mongodb://localhost:27017/thaiapp');

mongoose.connection.on('error', () => {
    console.log('Error in Database');
});
mongoose.connection.once('open', () => {
    console.log('Connection to Database');
})

const makeid = (length) =>  {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

app.post('/submit_message', async(req, res) => {

    const msg = new Message({name: req.body.name, email: req.body.email, message: req.body.message});

    // const data = {
    //     "name": name,
    //     "email": email,
    //     "message": message
    // }

    // mongoose.connection.collection('camps').insertOne(data, (err, collection) => {
    //     if(err){
    //         throw err;
    //     }

    //     console.log("Record Inserted Successfuly");
    // })

    await msg.save();

    return res.redirect('submited_message.html')
})

// app.post('/submit_training', async(req, res, next) => {
//     const trainingType = req.body.training;
//     const duration = req.body.duration;
//     const accommodation = req.body.accommodation;

//     // const training = new Training({
//     //     trainingType: req.body.training, 
//     //     duration: req.body.duration, 
//     //     accommodation: req.body.accommodation
//     // });

//     const data_tr = {
//         "trainingType": trainingType,
//         "duration": duration,
//         "accommodation": accommodation
//     }

//     mongoose.connection.collection('trainings').insertOne(data_tr, (err, collection) => {
//         if(err){
//             throw err;
//         }

//         console.log("Record - training Inserted Successfuly");
//     })
    
//     //await training.save();
//     //return res.redirect('booking_message.html');
//     next();

// })

// app.post('/submit_training', async(req, res, next) => {
//         // const trainingType = req.body.training;
//         // const duration = req.body.duration;
//         // const accommodation = req.body.accommodation;

//         const training = new Training({
//             trainingType: req.body.training,
//             duration: req.body.duration,
//             accommodation: req.body.accommodation
//         })

//         // const data = {
//         //     "trainingType": trainingType,
//         //     "duration": duration,
//         //     "accommodation": accommodation
//         // }
    
//         await training.save();

//         //return res.redirect('index.html')
//         next();
    
//     })

app.post('/submit_booking', async(req, res) => {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const country = req.body.country;
    // const city = req.body.city;
    // const street = req.body.street;
    // const postcode = req.body.postcode;
    // const phone = req.body.phone;
    // const email = req.body.email;
    // const note = req.body.note;

    const booking = new Booking({
        trainingType: req.body.training,
        duration: req.body.duration,
        accommodation: req.body.accommodation,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        country: req.body.country,
        city: req.body.city,
        street: req.body.street,
        postcode: req.body.postcode,
        phone: req.body.phone,
        email: req.body.email,
        note: req.body.note
    })

    // const data_l = {
    //     "firstName": firstName,
    //     "lastName": lastName,
    //     "country": country,
    //     "city": city,
    //     "street": street,
    //     "postcode": postcode,
    //     "phone": phone,
    //     "email": email,
    //     "note": note
    // }

    // mongoose.connection.collection('bookings').insertMany(Booking, (err, collection) => {
    //     if(err){
    //         throw err;
    //     }

    //     console.log("Record Inserted Successfuly");
    // })

    await booking.save();    
    return res.redirect('booking_message.html');

})

app.get('/', (req, res) => {
    res.set({"Allow-access-Allow-Origin": '*'});
})

app.listen(port, () => {
    console.log("Listening on port 3000");
})