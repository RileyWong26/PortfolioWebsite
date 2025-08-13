import Header from "@/app/header";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";
import HeaderButton from "../headerbutton";
import Link from "next/link";


export default async function Experience({props}) {
    // Config
    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
    };

    // Initialize app and database
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);
    
    // Query for all tabs in experience
    const querySnapshot = await getDocs(collection(db, "Experience"));

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
    const sortedArray = sortExperiences(querySnapshot);

    // Array for map function
    var experience = [];
    var images = [];
    // Iterate through the returned docs
    sortedArray.forEach((item) => {

        experience.push(
            <ExperienceCard 
                key={item.id} 
                title={item.id} 
                data={item.data()}/>
        );
        images.push(
            <div className="absolute w-full h-full"
                key={item.id}>
                {(item.data().Image === undefined || item.data().Image === "") ? null :
                    <Image
                        id={item.id}
                        className="absolute rounded-2xl opacity-0 h-full w-auto"
                        key={item.id}
                        src={item.data().Image}
                        fill
                        alt={"Image of Work Experience"}
                        priority={true}
                        quality={100}
                        placeholder="empty"
                    />
                }   
            </div>
        );
    });

    return (
        <section className="font-Anonymous bg-background1 min-h-screen max-w-screen transition-colors 
            duration-1000 ease-in-out flex flex-row text-primary relative">
            <Header />
            <HeaderButton />

            <section className="w-full flex flex-col animate-pullup space-y-6 py-4">
                <div className="w-full flex flex-row ">
                    <div className="w-4/5 flex flex-col space-y-6">
                        <h1 className="h-[15vh] w-4/5 text-hightlight ml-auto 
                            bg-amber content-end font-bold text-3xl ">
                            Work Experience
                        </h1>
                        <div className="w-4/5 flex flex-col ml-auto space-y-3 py-3">
                            {experience.map((entry) => entry)}
                        </div>
                    </div>
                    <div className="hidden xl:inline w-3/4 h-screen content-center sticky top-0 perspective-distant ">
                        <div className="relative w-9/10 h-[50vh] transform-3d bg-transparent m-auto"
                            id="ExperienceImageContainer">
                            {images.map((entry) => {return(
                                entry)
                            })}
                        </div>
                    </div>
                </div>
                <a className="lg:pl-38 pl-20 text-primary w-8/9 lg:w-1/2 flex flex-row text-xl space-x-4 content-center h-6"
                    href="https://docs.google.com/document/d/1nGHDpZ9HvGR8FkzPURvtzzub3NPhHUgyPH-FS1WBxu0/preview"
                    target="_blank"> 
                    <h1 className="content-center">
                        RESUME
                    </h1>
                    <Image 
                        className="my-auto h-3/5 w-auto hidden dark:inline animate-bounceright"
                        width={1000} height={1000}
                        alt="Dark Mode Right Arrow"
                        src={"/DarkMode/RightArrow.webp"}/>
                        <Image 
                        className="my-auto h-3/5 w-auto dark:hidden animate-bounceright"
                        width={1000} height={1000}
                        alt="Light Mode Right Arrow"
                        src={"/LightMode/RightArrow.webp"}/>
                </a>
            </section>
        </section>
    )
}