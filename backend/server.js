// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
let port = 5000;

const Jury = require("./models/jury.js")
const nominateDate = require("./models/nominate.js")

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//-----------------------------------------Routes-------------------------------------------------

//-------------------------------Jury Route---------------------------------------

app.get('/jury', async (req, res) => {
  try {
    const data = await Jury.find(); // Replace with your database fetching logic
    res.json(data); // Send the data as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jury data', error });
  }
});

//------------------------------Home Page -------------------------------------------

app.get("/",async (req,res)=>{
  try{
    let data = await nominateDate.find();
    res.json(data)
  } catch(error){
    res.status(500).json({message : 'Failed to fetch nomination data', error })
  }
})





app.listen(port,()=>{
  console.log(`App is listenning on port${port}.....`);
})
