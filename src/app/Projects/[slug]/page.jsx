import { getFirestore , getDoc, doc, getDocFromCache, getDocFromServer} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Header from "@/app/header";
import Image from "next/image";

function Technology ({tech}){
    return (
        <h1 className="text-white bg-tag px-4 py-1 rounded-2xl text-xs">
            {tech}
        </h1>
    )
}

export default async function Page({params}){
    // Get the title of the doc
    const {slug} = await params;
    // Fetch data from server
    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
    };
    // Initalize app and database
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Call Reference to the doc, Then snapshot
    const docRef = doc(db, "Projects", `${slug.replaceAll("%20", " ")}`);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data();
    
    return(
        <div className="bg-background1 min-h-screen relative flex flex-row">
            <Header />
            <div id="ExperienceDetails"
                className="w-1/2 mx-auto mb-auto mt-5 space-y-6 flex flex-col animate-pullup">
                <div className="h-[33vh] relative">
                    {(data.Image === undefined) ? null : 
                    <Image className="absolute rounded-2xl"
                            alt="Image of work"
                            src={data.Image}
                            objectFit="contain"
                            layout="fill"/>
                    }
                </div>
                <a className=" flex flex-row h-14 w-1/2 space-x-2 group cursor-pointer" 
                    href={(data.Link === undefined) ? null : data.Link}
                    target="_blank">
                    <h1 className="text-primary font-bold text-xl h-full content-center">
                        {slug.replaceAll("%20", " ")}
                    </h1>
                    {(data.Link === undefined) ? null :
                        <div className="relative h-1/2 aspect-square my-auto 
                            transition-transform duration-500 ease-in-out">
                            <Image className="absolute left-0 opacity-0 dark:opacity-100"
                                alt="Arrow To Company"
                                src="/DarkMode/GitHubDark.webp"
                                objectFit="contain"
                                layout="fill"/>
                            <Image className="absolute left-0 opacity-100 dark:opacity-0"
                                alt="Arrow To Company"
                                src="/LightMode/GitHubLight.webp"
                                objectFit="contain"
                                layout="fill"/>
                        </div>
                    }
                </a>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        DATE
                    </h1>
                    <h1 className="text-sm text-primary">
                        {data.StartDate} {(data.EndDate != undefined) ? "-": ""} {data.EndDate}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        DESCRIPTION
                    </h1>
                    <h1 className="text-sm text-primary whitespace-pre-line">
                        {data.Description2}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        TECHNOLOGIES
                    </h1>
                    <div className="flex flex-row space-x-2">
                        {(data.Tags === undefined) ? null : data.Tags.map((entry, index) => {
                            return(
                                <Technology key={index.toString()}
                                    tech={entry}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
