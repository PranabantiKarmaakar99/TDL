import  Express  from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from 'body-parser';

import Routes from './routes/routes.js';



const app = Express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);


const PORT = 7000;
Connection();




app.listen(PORT,()=>{console.log ("Your server is running succesfully at port 7000")});
