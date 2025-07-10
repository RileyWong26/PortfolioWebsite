import Header from "@/app/header";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
import Image from "next/image";
import ExperienceCard from "./ExperienceCard";


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

    // Array for map function
    var experience = [];
    var images = [];
    // Iterate through the returned docs
    querySnapshot.forEach((item) => {
        
        experience.push(
            <ExperienceCard key={item.id} title={item.id} data={item.data()}/>
        );
        images.push(
            <div className="absolute w-full h-full"
                key={item.id}>
                {(item.data().Image === undefined) ? null :
                    <Image
                        id={item.id}
                        className="absolute rounded-2xl opacity-0"
                        key={item.id}
                        src={item.data().Image.toString()}
                        height={0} width={0}
                        alt={"Image of Work Experience"}
                        objectFit="contain"
                        layout="fill"
                        unoptimized
                    />
                }   
            </div>
        );
    });

    return (
        <div className = "font-Anonymous bg-background1 min-h-screen transition-colors duration-1000 ease-in-out flex flex-row space-x-2 text-primary relative">
            <Header />
            <div className="w-full flex flex-row animate-pullup">
                <div className="w-4/5 flex flex-col space-y-6">
                    <h1 className="h-[15vh] w-4/5 text-hightlight ml-auto bg-amber content-end font-bold text-3xl ">
                        Work Experience
                    </h1>
                    <div className="w-4/5 flex flex-col ml-auto space-y-3 ">
                        {experience.map((entry) => entry)}
                    </div>
                </div>
                <div className="w-3/4 h-screen content-center sticky top-0 perspective-distant ">
                    <div className="relative w-9/10 h-[50vh] transform-3d bg-transparent m-auto"
                        id="ExperienceImageContainer">
                        {images.map((entry) => {return(
                            entry)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}