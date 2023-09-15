const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', userRoutes);
app.use('/api/user', contactUsRoutes);

const mongoURI = "mongodb://localhost:27017/india_tourism_app?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(mongoURI, () => {
    console.log("Connected to mongoDB");
})

let port = 5000 // process.env.PORT;
const server = app.listen(port || 5000, () => {
    console.log(`Server is started on Port ${port}`);
});
