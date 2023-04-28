import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import companyRoutes from './routes/company.routes.js'
// Imported Routes

dotenv.config();

const app = express();
const port = 8080 ;

app.use(cors());
app.use(express.json({limit: '50mb'}))

const figure = `
----------------------------------
   Yo! nomadic server started !
----------------------------------
    ░░░░░▄▄▀▀▀▀▀▀▀▀▀▄▄░░░░░
    ░░░░█░░░░░░░░░░░░░█░░░░
    ░░░█░░░░░░░░░░▄▄▄░░█░░░
    ░░░█░░▄▄▄░░▄░░███░░█░░░
    ░░░▄█░▄░░░▀▀▀░░░▄░█▄░░░
    ░░░█░░▀█▀█▀█▀█▀█▀░░█░░░
    ░░░▄██▄▄▀▀▀▀▀▀▀▄▄██▄░░░
    ░▄█░█▀▀█▀▀▀█▀▀▀█▀▀█░█▄░
----------------------------------
  Server started at Port ${port}
----------------------------------
`;

// Setting Routes 
app.use('/api/v1/company', companyRoutes);

const startServer = async ()=> {
  try {
   // connectDB(process.env.MONGODB_URL);
    app.listen(port, ()=> {
      console.log(figure) 
    });
  }catch(error){
    console.log(error);
  }
}


startServer();