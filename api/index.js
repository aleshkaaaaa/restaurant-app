require('dotenv').config();


const express = require('express');
const mongoose  = require('mongoose');
const Restaurant = require('./models/Restaurant');
const cors = require('cors');

mongoose.set('strictQuery', false);


const app = express();

app.use(cors({origin: process.env.CLIENT_URI}));
app.use(express.json());

mongoose
.connect(process.env.DB_URI)
.then(() => console.log('DB connected'))
.catch((err) => {
    console.error(err);
    process.exit(1);
});

app.get('/', (req, res) => {});

app.post('/post', async (req, res) => {

    const {title, description, foodType, location} = req.body;
    const RestaurantDoc = await Restaurant.create({
        title, 
        description, 
        foodType,
        location,
    })

    res.json({RestaurantDoc});
});

app.get('/post', async (req, res) => {
    res.json(await Restaurant.find());
});

app.listen(process.env.PORT);