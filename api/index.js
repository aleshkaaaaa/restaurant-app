const express = require('express');
const mongoose  = require('mongoose');
const Restaurant = require('./models/Restaurant');
const cors = require('cors');


const app = express();

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());

mongoose
.connect('mongodb+srv://admin:admin@cluster0.sknl5oe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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

app.listen(4000);