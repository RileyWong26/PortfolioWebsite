const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const request = require("request");
const process = require("process");
const dotenv = require("dotenv").config({path: "./.env"});

const hostname = "http://192.168.68.104";
const port = 8000;
app.use(express.json());

app.use((req, res, next) => {
    // Set CORS headers to allow frontend
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})


// Post request to send email
app.post("/test", (req, res) => {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    const subject = body.subject;
    const message = body.message;
    
    // Check if all required fields are filled
    const GoodMessage = name !== undefined && email !== undefined && subject !== undefined && message !== undefined;

    if(GoodMessage){

        try{
            sendMail(name, email, subject, message);
            res.status(200).json({msg:"Email Sent"});
        }catch(error) {
            res.status(400).json({msg: "An Error Occurred"});
        }
        
        
    }
    else{
        res.status(400).json({msg: "Error occured before sending the mail.  Possibly check the inputs are filled in."});
    }
})


app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
})


async function sendMail(name, email, subject, message){
    // Initalize the transporter, 
    // The email account that sends the mail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.email,
            pass: process.env.appkey,
        }
    });
    // Set up the mail options
    let mailOptions = {
        from: process.env.email,
        to: [process.env.email, email],
        subject: subject,
        text: `From: ${email} \nName: ${name} \n\n${message}`,
    };
    
    // Send the mail
    transporter.sendMail(mailOptions)
        .then((info) => {console.log(info.response)})
        .catch((error => {console.log(error)}));
}