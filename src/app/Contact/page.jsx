"use client";
import Header from "@/app/header";
import HeaderButton from "../headerbutton";
import Image from "next/image";

export default function Contact() {

    function ErrorText(msg) {
        const EmailStatus = document.getElementById("EmailStatus");
        EmailStatus.classList.remove("text-passed");
        EmailStatus.classList.remove("hidden");
        EmailStatus.classList.add("text-borderdeny");
        EmailStatus.classList.add("inline");
        EmailStatus.innerHTML = msg;
    }
    
    async function sendMail(name, email, subject, message){
        const EmailStatus = document.getElementById("EmailStatus");
        await fetch("https://5lghnqwcha.execute-api.us-east-1.amazonaws.com/email", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message,
            }),
            headers:{
                'Content-Type' : 'application/json',
            },
            mode: 'no-cors',
        })
        .then((res) => {return res.statuscode})
        .then((status) => {(status === 200) ? 
            [
                EmailStatus.classList.remove("hidden"),
                EmailStatus.classList.remove("text-borderdeny"),
                EmailStatus.classList.add("text-passed"),
                EmailStatus.classList.add("inline"),
                EmailStatus.innerHTML = "Message Sent!"]
                : 
            ErrorText("Error occured sending mail");
        })
        .catch((error) => {
            console.log(error); 
            ErrorText("Error occured processing request");
        });
       
    }
    

    function checkInputs () {
        const nameInput = document.getElementById("NameInput");
        const emailInput = document.getElementById("EmailInput");
        const subjectInput = document.getElementById("SubjectInput");
        const messageInput = document.getElementById("MessageInput");

        const name = nameInput.value;
        const email = emailInput.value;
        const subject = subjectInput.value;
        const message = messageInput.value;
        const FilledName = name !== "";
        const FilledEmail= email !== "";
        const FilledSubject = subject !== "";
        const FilledMessage = message !== "";

        (!FilledName) ?
            [nameInput.classList.remove("border-transparent"),
                nameInput.classList.add("border-borderdeny")] 
                :
            [nameInput.classList.remove("border-borderdeny"), 
                nameInput.classList.add("border-transparent")];
        
        (!FilledEmail) ?
            [emailInput.classList.remove("border-transparent"),
                emailInput.classList.add("border-borderdeny")]
                :
            [emailInput.classList.remove("border-borderdeny"),
                emailInput.classList.add("border-transparent")];
        (!FilledSubject) ?
            [subjectInput.classList.remove("border-transparent"),
                subjectInput.classList.add("border-borderdeny"),] 
                :
            [subjectInput.classList.remove("border-borderdeny"),
                subjectInput.classList.add("border-transparent")];
        
        (!FilledMessage) ?
            [messageInput.classList.remove("border-transparent"),
                messageInput.classList.add("border-borderdeny")] 
                : 
            [messageInput.classList.remove("border-borderdeny"),
                messageInput.classList.add("border-transparent")];
        
        (FilledName && FilledEmail && FilledSubject && FilledMessage) ?
            sendMail(name, email, subject, message) : ErrorText("Please fill in all fields.");
            
    }

    return (
        <div className = "bg-background1 min-h-screen w-screen max-w-screen transition-colors duration-1000 ease-in-out flex flex-row ">
            <Header />
            <HeaderButton />
            <div className="w-full min-h-screen flex flex-col animate-pullup">
                <div className="w-4/5 min-h-screen flex flex-col mx-auto space-y-4 py-3 ">
                    <h1 className="h-[10vh] w-full text-3xl text-hightlight font-bold mt-auto lg:m-auto content-center">
                        Contact Me
                    </h1>
                    <div className="lg:h-[10vh] w-full text-xl text-primary flex flex-col lg:flex-row ">
                        <p className="content-center">
                            I am always looking forward to connect or work on projects.  Get in touch here, or shoot me an email directly at&nbsp;
                            <a className="text-hightlight content-center"
                            href="mailto:rileywongwong@gmail.com">
                            rileywongwong@gmail.com
                            </a>
                        </p>
                        <a className="w-1/10 h-auto content-center"
                            href="//www.linkedin.com/in/riley-wong-1051b2250"
                            target="_blank">
                                <Image src="/DarkMode/LinkedInDark.webp"
                                    height={1000} width={1000}
                                    className="w-auto h-full lg:h-3/5 m-auto hidden dark:block"
                                    alt="LinkedIn" 
                                    unoptimized/> 
                                <Image src="/LightMode/LinkedInLight.webp"
                                    height={1000} width={1000}
                                    className="w-auto h-full lg:h-3/5 m-auto dark:hidden"
                                    alt="LinkedIn" 
                                    unoptimized/> 
                        </a>

                    </div>
                    <input type="text" placeholder="Name" 
                        id="NameInput"
                        className="bg-background2 w-full rounded-xl lg:rounded-2xl text-lg p-2 lg:p-4 focus:outline-0 
                        focus:border-borderselect/80 placeholder-text2 border-2 border-transparent 
                        transition-all duration-300 ease-in-out text-primary" 
                        onBlur={(e) => {
                            const input = e.target;
                            (input.value === "") ? 
                                [input.classList.remove("border-transparent"),
                                    input.classList.add("border-borderdeny")]
                                    :
                                [input.classList.remove("border-borderdeny"), 
                                    input.classList.add("border-transparent")];
                        }}>
                    </input>
                    <input type="email" placeholder="Email" 
                        id="EmailInput"
                        className="bg-background2 w-full rounded-xl lg:rounded-2xl text-lg  p-2 lg:p-4 focus:outline-0 
                        focus:border-borderselect/80 placeholder-text2 border-2 border-transparent 
                        transition-all duration-300 ease-in-out text-primary" 
                        onBlur={(e) => {
                            const input = e.target;
                            (input.value === "") ? 
                                [input.classList.remove("border-transparent"),
                                    input.classList.add("border-borderdeny")]
                                    :
                                [input.classList.remove("border-borderdeny"), 
                                    input.classList.add("border-transparent")];
                        }}>
                    </input>
                    <input type="text" placeholder="Subject" 
                        id="SubjectInput"
                        className="bg-background2 w-full rounded-xl lg:rounded-2xl text-lg p-2 lg:p-4 focus:outline-0 
                        focus:border-borderselect/80 placeholder-text2 border-2 border-transparent 
                        transition-all duration-300 ease-in-out text-primary" onBlur={(e) => {
                            const input = e.target;
                            (input.value === "") ? 
                                [input.classList.remove("border-transparent"),
                                    input.classList.add("border-borderdeny")]
                                    :
                                [input.classList.remove("border-borderdeny"), 
                                    input.classList.add("border-transparent")];
                        }}>
                    </input>
                    <textarea type="text" placeholder="Message"
                        id="MessageInput"
                        className="bg-background2 w-full rounded-xl lg:rounded-2xl text-lg h-[30vh] p-2 lg:p-4 focus:outline-0 
                        focus:border-borderselect/80 placeholder-text2 border-2 border-transparent 
                        transition-all duration-300 ease-in-out text-primary resize-none"
                        onBlur={(e) => {
                            const input = e.target;
                            (input.value === "") ? 
                                [input.classList.remove("border-transparent"),
                                    input.classList.add("border-borderdeny")]
                                    :
                                [input.classList.remove("border-borderdeny"), 
                                    input.classList.add("border-transparent")];
                        }}> 
                    </textarea>
                    {/*                 Send button             */}
                    <div className="flex flex-col lg:flex-row space-x-5 w-full ">
                        <button className="text-white bg-hightlight m-0 w-full lg:w-1/4 p-4 rounded-2xl cursor-pointer text-xl" 
                            id="SendButton" onClick={() => {checkInputs()}}>
                            Send Message
                        </button>
                        <h2 className="w-full lg:w-1/2 ml-5 content-center hidden font-bold text-xl"
                            id="EmailStatus">
                            Email Sent!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}