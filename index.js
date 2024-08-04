const mongoose=require("mongoose");
const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const MONGO_URL=process.env.MONGO_URL;
app.use(express.json());
const cors=require("cors");
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
mongoose.connect(MONGO_URL)
    .then(()=>console.log("database connected successfully..."))
    .catch(()=>console.log("database not connected..."));

//imports...
const authRouter=require('./Routes/auth.route');
const messageRouter=require('./Routes/message.route');
const doctorsRouter=require("./Routes/doctors.route");

//api calls..
app.use('/api/auth',authRouter);
app.use('/api/message',messageRouter);
app.use('/api/doctors',doctorsRouter);
app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(4400,()=>{
    console.log("server running at port 4000...");
});

//2k6HN2Z5rP1DXDAL
