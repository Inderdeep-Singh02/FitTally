const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ //useNewUrlParser : true ,
     //useCreateIndex : true,
     useUnifiedTopology : true
    });
const connection =  mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database is connected');
});



app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);


app.use(cors({origin: true, credentials: true}));

app.listen(port, () => {
    console.log('server is running on port : ${port}');
});
