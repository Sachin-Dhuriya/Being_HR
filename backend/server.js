// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
let port = 5000;

const Jury = require("./models/jury.js")
const nominateDate = require("./models/nominate.js")
//---------------------------------//Error Handling class-----------------------------------
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");



// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//-----------------------------------------Routes-------------------------------------------------

//-------------------------------Jury Route---------------------------------------

app.get('/jury',wrapAsync( async (req, res, next) => {
  try {
    const data = await Jury.find(); // Replace with your database fetching logic
    res.json(data); // Send the data as a JSON response
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch jury data', error });
  }
}))

//------------------------------Home Page -------------------------------------------

app.get("/", wrapAsync(async (req,res, next)=>{
  try{
    let data = await nominateDate.find();
    res.json(data)
  } catch(error){
    res.status(500).json({message : 'Failed to fetch nomination data', error })
  }
}))

//------------------------------Leaderboard--------------------------------------
/*From here the data from the MongoDB to the leaderboard is fetching*/ 
app.get("/leaderboard",wrapAsync(async(req,res, next)=>{
  try{
    let nominate = await nominateDate.find();
    nominate = nominate.sort((a, b) => {
      const totalScoreA = a.votes + (a.juryVotes || 0);
      const totalScoreB = b.votes + (b.juryVotes || 0);
      return totalScoreB - totalScoreA;
  });
  res.json(nominate)
  } catch(error){
    res.status(500).json({message : 'Failed to fetch leaderboard data', error })
  }
})) 


app.listen(port,()=>{
  console.log(`App is listenning on port${port}.....`);
})

//--------------------------------Error Handling------------------------------
app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Page not found !...."));
})

app.use((err, req, res, next) => {
  let{status=500,message="something went wrong "}=err;
  res.status(status).json(message);
});