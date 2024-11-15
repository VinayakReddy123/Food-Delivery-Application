import express from 'express';
import cors from 'cors';
import { ConnectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoutes.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config.js';


//app config
const app = express();
const port=4000;

//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
     res.send("hello");
})

ConnectDB();

//api endpoints
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads')); 
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);

app.listen(port,()=>{
    console.log("Server is running on port ",port);
})