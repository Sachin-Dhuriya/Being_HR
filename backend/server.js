// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Joi = require('joi');
require('dotenv').config();
require('./models/dbConnect');
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes.js")

const Jury = require("./models/jury.js")
const nominateData = require("./models/nominate.js")
//---------------------------------//Error Handling class-----------------------------------
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");



// Middleware

app.use(cors());
app.use('/auth', authRoutes); // <- NEW LINE
app.use(bodyParser.json());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies
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
    let data = await nominateData.find();
    res.json(data)
  } catch(error){
    res.status(500).json({message : 'Failed to fetch nomination data', error })
  }
}))

//------------------------------Leaderboard--------------------------------------
/*From here the data from the MongoDB to the leaderboard is fetching*/ 
app.get("/leaderboard",wrapAsync(async(req,res, next)=>{
  try{
    let nominate = await nominateData.find();
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

//--------------------------------Vote---------------------------------------
app.post('/vote/:id', async (req, res) => {
  
  try {
    let {id} = req.params;
    
    // Find the nominee by id and increment the vote count
    const nominee = await nominateData.findById(id);
    if (!nominee) {
      return res.status(404).send('Nominee not found');
    }
    
    nominee.votes += 1; // Increment the vote count by 1
    await nominee.save(); // Save the updated nominee data

    // Send the updated vote count back in the response
    res.json({ votes: nominee.votes });
  } catch (error) {
    console.error('Error updating vote:', error);
    res.status(500).send('Error updating vote');
  }
});

//----------------------------------Nominate Route---------------------------
//-----------------------It Deals with the Nomination Form
app.post("/nominate", wrapAsync(async (req, res, next) => {
  const schema = Joi.object({
    nominationType: Joi.string().trim().required().messages({
      "string.empty": "Nomination type is required.",
    }),
    fullName: Joi.string().trim().required().messages({
      "string.empty": "Full name is required.",
    }),
    email: Joi.string().trim().email().required().messages({
      "string.empty": "Email is required.",
      "string.email": "Invalid email format.",
    }),
    linkedIn: Joi.string().trim().uri().required().messages({
      "string.empty": "LinkedIn profile URL is required.",
      "string.uri": "Invalid LinkedIn URL format.",
    }),
    phone: Joi.string()
      .pattern(/^\d{10}$/)
      .required()
      .messages({
        "string.empty": "Phone number is required.",
        "string.pattern.base": "Phone number must be a 10-digit number.",
      }),
    company: Joi.string().trim().required().messages({
      "string.empty": "Company name is required.",
    }),
    jobTitle: Joi.string().trim().required().messages({
      "string.empty": "Job title is required.",
    }),
    category: Joi.string().trim().required().messages({
      "string.empty": "Category is required.",
    }),
    whyFit: Joi.string().trim().optional(),
    ideas: Joi.string().trim().optional(),
    votes: Joi.number().integer().min(0).optional(),
    votedBy: Joi.array().items(Joi.string().email()).optional(),
    peerFullName: Joi.string().trim().default("self").optional(),
    peerEmail: Joi.string().trim().email().optional().messages({
      "string.email": "Invalid peer email format.",
    }),
    peerLinkedIn: Joi.string().trim().uri().optional().messages({
      "string.uri": "Invalid peer LinkedIn URL format.",
    }),
    peerPhone: Joi.string()
      .pattern(/^\d{10}$/)
      .optional()
      .messages({
        "string.pattern.base": "Peer phone must be a 10-digit number.",
      }),
    peerCompany: Joi.string().trim().optional(),
    peerJobTitle: Joi.string().trim().optional(),
    relation: Joi.string().trim().optional(),
  });

  // Validate the  request body
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    // Return a 400 response with detailed error messages
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }

  try {
    // Create and save the nomination 
    const data = new nominateData(value);
    await data.save();

    // Respond success
    res.status(201).json({ message: "Nomination submitted successfully", data });
  } catch (err) {
    console.error("Error saving nomination:", err);
    next(new ExpressError(500, "Failed to save nomination"));
  }
}));

//--------------------------------Error Handling------------------------------
app.all("*",(req,res,next)=>{
  next(new ExpressError(404,"Page not found !...."));
})

app.use((err, req, res, next) => {
  let{status=500,message="something went wrong "}=err;
  res.status(status).json(message);
});

//------------------------------------Listenning Port---------------------------------
app.listen(PORT,()=>{
  console.log(`App is listenning on port${PORT}.....`);
})