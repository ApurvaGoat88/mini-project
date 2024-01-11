const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const socket=require('socket.io')
const auth = require("./routes/auth");
const msg = require("./routes/msg");
const connectDB = require('./config/db')
dotenv.config({path:'./config/.env'})
// const axios = require('axios')
connectDB()

const app=express()
app.use(cors());
app.use(express.json());


const PORT = app.listen(process.env.PORT, () =>
  console.log(`SERVER UP and running at ${process.env.PORT}`)
)