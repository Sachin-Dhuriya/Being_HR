const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://dhuriyasachin561:p9fPWVIzuYQp9qMN@gminfotech.o69uz.mongodb.net/?retryWrites=true&w=majority&appName=Gminfotech"
async function  main(){
   await mongoose.connect(mongoURL);
}

main().then(()=>{console.log("Connection Successfull.....");}).catch(()=>{console.log("Error Occured during connection");})

const jurySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim: true,
    },
    position : {
        type : String,
        required : true,
        trim: true,
    },
    companyName : {
        type : String,
        required : true,
        trim: true,
    },
    juryDesc : {
        type : String,
        required : true,
        trim: true,
    },
   
    img : {
        type : String,
        required : true,
        trim:true,
    },
    linkedin: {
        type : String,
        required : true,
        trim: true,
    },
   
   
})

const juryData = new mongoose.model("juryData",jurySchema)

module.exports = juryData;