import { getFirestore , getDoc, doc, getDocFromCache, getDocFromServer} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Header from "@/app/header";
import Image from "next/image";
import HeaderButton from "@/app/headerbutton";

function Attachment({details}){
    const video = details.Video;
    const image = details.Image;
    return(
        <div className="h-[40vh] ">
            {(image === undefined) ? 
                <iframe 
                    className="h-full w-auto m-auto"
                    src={video}/> :
                <Image 
                    className="h-full w-auto m-auto"
                    src={image} 
                    height={0} width={0}
                    unoptimized/>
            }
        </div>
    )
}

function Technology ({tech}){
    return (
        <h1 className="text-white bg-tag px-4 py-1 rounded-2xl text-xs2 xl:text-xs ">
            {tech}
        </h1>
    )
}

export default async function Page({params}){
    // Get the title of the doc
    const {slug} = await params;
    const pageName = slug.replaceAll("%20", " ");
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
    const docRef = doc(db, "Projects", pageName);
    const docSnap = await getDoc(docRef);

    // Set data
    const data = docSnap.data();

    const image = data.Image;
    const link = data.Link;
    const startDate = data.StartDate;
    const endDate = data.EndDate;
    const tags = data.Tags;
    const description = data.Description2;
    const attachments = data.ExtraAttachments;

    return(
        <div className="bg-background1 min-h-screen relative flex flex-row">
            <Header />
            <HeaderButton />
            <div id="ProjectDetails"
                className="w-1/2 mx-auto mb-12 mt-12 space-y-6 flex flex-col animate-pullup ">
                <div className="h-[33vh]">
                    {(image === undefined) ? null : 
                    <Image className="m-auto rounded-2xl h-full w-auto"
                            alt="Image of work"
                            src={image}
                            width={0} height={0}
                            quality={100}
                            unoptimized/>
                    }
                </div>
                <a className=" flex flex-row h-14 w-full space-x-2 group cursor-pointer" 
                    href={(link === undefined) ? null : link}
                    target="_blank">
                    <h1 className="text-primary font-bold text-base xl:text-xl h-full content-center ">
                        {pageName}
                    </h1>
                    {(link === undefined) ? null :
                        <div className="relative h-1/2 aspect-square my-auto 
                            transition-transform duration-500 ease-in-out group-hover:animate-bounceright translate-0 ">
                            <Image className="h-full w-auto hidden dark:block" 
                                alt="Arrow To Company"
                                src="/DarkMode/GitHubDark.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                            <Image className="h-full w-auto  dark:hidden"
                                alt="Arrow To Company"
                                src="/LightMode/GitHubLight.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                        </div>
                    }
                </a>
                <div>
                    <h1 className="text-primary font-bold text-sm xl:text-lg">
                        DATE
                    </h1>
                    <h1 className="text-xs text-primary xl:text-base">
                        {startDate} {(endDate != undefined) ? "-": ""} {endDate}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-sm xl:text-lg">
                        DESCRIPTION
                    </h1>
                    <h1 className="text-xs xl:text-base text-primary whitespace-pre-line">
                        {description}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-sm xl:text-lg">
                        TECHNOLOGIES
                    </h1>
                    <div className="flex flex-row space-x-2 flex-wrap gap-1">
                        {(tags === undefined) ? null : 
                            tags.map((entry, index) => {
                                return(
                                    <Technology key={`Tag${index.toString()}`}
                                        tech={entry}/>
                                )
                            })}
                    </div>
                </div>
                {(attachments === undefined) ? null : 
                    <div className="flex flex-col gap-2">
                        <h1 className="text-primary font-bold text-sm xl:text-lg">
                            ATTACHMENTS
                        </h1> 
                        {attachments.map((item, index) => {
                            return <Attachment 
                                details={item} 
                                key={`Attachment${index}`}
                                />
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
