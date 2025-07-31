const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const process = require("process");
const dotenv = require("dotenv").config({path: "./.env"});
const fs = require('fs');
const firebase = require('firebase/app');
const firestore = require('firebase/firestore');

// Handle secrets
const secretsFile = fs.readFileSync('/run/secrets/email_secret', 'utf-8', (err, data) => {
        if (err) console.log(err);
    }).trim();
const lines = secretsFile.split("\n");
var secrets = {};
lines.forEach((line) => {
    line = line.replace("\r", "");
    split = line.split("=");
    secrets[split[0]] = split[1];
})

// Initialize firebase app
try{
    // Initaliaze app
    const firebaseConfig = {
        apiKey: secrets.apiKey,
        authDomain: secrets.authDomain,
        projectId: secrets.projectId,
        storageBucket: secrets.storageBucket,
        messagingSenderId: secrets.messagingSenderId,
        appId: secrets.appId,
        measurementId: secrets.measurementId,
    }
    const fireapp = firebase.initializeApp(firebaseConfig);
    var db = firestore.getFirestore(fireapp);
    console.log("Successfully connected to database")
}catch(error){
    console.log("Error connecting to database : " + error);
}


const hostname = "http://localhost";
const port = process.env.PORT;

// Helper function, sort Projects by the end date
const sortProjects = (projects) => {
    const MonthMap = {
        "January" : 1,
        "February" : 2,
        "March" : 3,
        "April" : 4,
        "May" : 5,
        "June": 6,
        "July": 7,
        "August" : 8,
        "September" : 9,
        "October" : 10,
        "November" : 11,
        "December" : 12,
    }
    const sorted = [];
    projects.forEach((project) => {
        // Initialize project vars
        const data = project.data();
        const StartDate = data.StartDate;
        var EndDate = data.EndDate;
        (EndDate === undefined) ? EndDate = StartDate : EndDate = EndDate;
        const EndMonth = MonthMap[EndDate.split(" ")[0]];
        const EndYear = parseInt(EndDate.split(" ")[1]);
        if(sorted.length > 0 ){
            const FirstStartDate = sorted[0].data().StartDate;
            var FirstEndDate = sorted[0].data().EndDate;
            (FirstEndDate === undefined) ? FirstEndDate = FirstStartDate : FirstEndDate = FirstEndDate;
            const FirstYear = parseInt(FirstEndDate.split(" ")[1]);
            const FirstMonth = MonthMap[FirstEndDate.split(" ")[0]];
            // Check if the year on the current project is greater than the year on the first project in the sorted array
            if(FirstYear < EndYear){
                sorted.unshift(project);
            }
            // Both in the same year
            else if(FirstYear === EndYear){
                if(FirstMonth < EndMonth) {
                    sorted.unshift(project);
                }
                else{
                    const stack = [];
                    // Keep removing the first element until the month is less than the current project's month or the years are different.
                    let StartDate = FirstStartDate;
                    let EndDate = FirstEndDate;
                    let Year = FirstYear;
                    let Month = FirstMonth;
                    while(Month > EndMonth && Year === EndYear){
                        stack.push(sorted.shift);
                        // Break if no more elements
                        if (sorted.length === 0 ){
                            break;
                        }
                        else{
                            // Update vars
                            StartDate = sorted[sorted.length - 1].data().StartDate;
                            EndDate = sorted[sorted.length - 1].data().EndDate;
                            (EndDate === undefined) ? EndDate = StartDate : EndDate = EndDate;
                            Year = parseInt(EndDate.split(" ")[1]);
                            Month = MonthMap[EndDate.split(" ")[0]];
                        }
                    }
                    sorted.push(project);
                    while(stack.length > 0){
                        sorted.push(stack.pop());
                    }
                }
            }
            // Year of current / new project is less than the first one in sorted.
            else{
                const stack = [];
                // Vars for the last element in the 
                let StartDate = sorted[sorted.length - 1].data().StartDate;
                let EndDate = sorted[sorted.length - 1].data().EndDate;
                (EndDate === undefined) ? EndDate = StartDate : EndDate = EndDate;
                let Year = parseInt(EndDate.split(" ")[1]);
                let Month = MonthMap[EndDate.split(" ")[0]];
                // Move backwards, as the end year and end month of current project are greater than the project at the end of sorted arr
                while(Year < EndYear || (Year === EndYear && Month > EndMonth)){
                        stack.push(sorted.pop());
                        // Break if no more elements
                        if (sorted.length === 0 ){
                            break;
                        }
                        else{
                            // Update vars
                            StartDate = sorted[0].data().StartDate;
                            EndDate = sorted[0].data().EndDate;
                            (EndDate === undefined) ? EndDate = StartDate : EndDate = EndDate;
                            Year = parseInt(EndDate.split(" ")[1]);
                            Month = MonthMap[EndDate.split(" ")[0]];
                        }
                    }
                    sorted.unshift(project);
                    while(stack.length > 0){
                        sorted.unshift(stack.pop());
                    }
            }
            
        }
        else{
            sorted.push(project);
        }

    });
    return sorted;

}

// Sort Experiences into the most recent end date to the oldest end date.  
const sortExperiences = (experiences) => {
    var sorted = [];
    // Iterate through the experiences
    experiences.forEach((experience) => {
        const data = experience.data();
        const StartDate = data.StartDate;
        const EndDate = data.EndDate;
        if (sorted.length > 0) {
            // Check if current experience is present.
            if (EndDate === "Present" || EndDate === undefined){
                sorted.unshift(experience);
            }
            else{
                var stack = [];
                // While the new entry's enddate is greater then the last enddate in the sorted array
                while(parseInt(EndDate.split(" ")[1]) > parseInt(sorted[sorted.length - 1].data().EndDate.split(" ")[1])){
                    stack.push(sorted.pop());
                }
                sorted.push(experience);
                // Re add the items
                while(stack.length > 0){
                    sorted.push(stack.pop());
                }
            }
            
        }
        else{
            sorted.push(experience);
        }
    });
    return sorted;
}


app.use(express.json());

app.use((req, res, next) => {
    // Set CORS headers to allow frontend
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin", "http://frontend:3000");
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})


// Post request to send email
app.post("/email", (req, res) => {
    const body = req.body;
    console.log(body);
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

    async function sendMail(name, email, subject, message){
    // Initalize the transporter, 
    // The email account that sends the mail
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: secrets.email,
            pass: secrets.appkey,
        }
    });
    // Set up the mail options
    let mailOptions = {
        from: secrets.email,
        to: [secrets.email, email],
        subject: subject,
        text: `From: ${email} \nName: ${name} \n\n${message}`,
    };
    
    // Send the mail
    transporter.sendMail(mailOptions)
        .then((info) => {
            console.log(info.response);
        })
        .catch((error) => {
            res.status(400).json({msg:"Error Sending Message"});
        });
}
})
app.get("/projects", async (req, res) => {
    const projects = await firestore.getDocs(firestore.collection(db, "Projects"));

    const sortedProjects = sortProjects(projects);
    // var projectjson = {};
    // sortedProjects.forEach((project) => {
    //     projectjson[project.id] = project.data();
    // })
    // res.status(200).json(projectjson);
    var projectdata = {};
    sortedProjects.forEach((project) => {
        projectdata[project.id] = project.data();
    })
    res.status(200).json(projectdata)
    
})

app.get("/experience", async(req, res) => {
    const experience = await firestore.getDocs(firestore.collection (db, "Experience"));

    const sortedExperience = sortExperiences(experience);
    var experienceData = {};
    sortedExperience.forEach((experience) => {
        experienceData[experience.id] = experience.data();
    });
    res.status(200).json(experienceData);
})

app.get("/experiencedetail", async(req, res) => {
    const experienceName = req.query.experience;

    const details = await firestore.getDoc(firestore.doc(db, "Experience", experienceName));
    const name = details.id;
    const data = details.data();
    res.status(200).json({
        [name] : data
    });
})

app.get("/projectdetail", async(req, res) => {
    const projectName = req.query.project;

    const details = await firestore.getDoc(firestore.doc(db, "Projects", projectName));
    const name = details.id;
    const data = details.data();
    res.status(200).json({
        [name] : data
    })
})

app.get("/status", (req, res) => {
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
})  




