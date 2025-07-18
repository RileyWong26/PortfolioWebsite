import Header from "@/app/header";
import {initializeApp} from "firebase/app";
import {getFirestore, getDocs, collection} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import HeaderButton from "../headerbutton";

function Tag({tech}){
    return (
        <h1 className="text-white bg-tag px-4 py-1  rounded-2xl xl:text-xs text-xs2">
            {tech}
        </h1>
    )
}
function ProjectCard({id, data}) {

    // Required variables from data
    const image = data.Image;
    const description = data.Description;
    const tags = data.Tags;

    return(
        <Link className="bg-hightlight aspect-square text-white rounded-2xl content-end overflow-hidden group relative shadow-2xl"
            href={
                `/Projects/${id}`
            }>
            {(image === undefined || image === "") ? null : 
                
                <Image 
                    src={image}
                    className="w-full h-auto"
                    width={0} height={0}
                    key={id}
                    alt="Project Image"
                    fill
                    unoptimized
                   />
            }
            
            <div className="bg-gradient-to-b from-0% to-30% from-black/10 to-black/60 w-full h-1/4 px-4 relative
                group-hover:h-full group-hover:to-50% translate-all duration-500 ease-in-out flex flex-col space-y-0.5 xl:space-y-1 ">
                    
                <div className="h-1/20 group-hover:h-1/2 transition-all duration-500 ease-in-out"/>
                <div className="flex flex-row ">
                    <h1 className="w-19/20 text-base xl:text-xl">
                        {id}
                    </h1>
                    <div className="w-1/20 aspect-square -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:translate-x-1/2
                        transition-transform duration-500 ease-in-out">
                        <Image 
                            className="w-full h-auto"
                            alt="Arrow up"
                            src={"/DarkMode/ArrowUpDarkMode.webp"}
                            width={0} height={0}
                            quality={100}/>
                    </div>
                </div>
                <div className="w-full hidden xl:inline h-1/30 transition-all duration-500 ease-in-out text-transparent 
                    xl:text-base group-hover:h-1/4 group-hover:text-alt text-ellipsis overflow-hidden">
                    { (description === undefined) ? null :
                        description
                    }
                </div>
                <div className="flex flex-row space-x-1 flex-wrap overflow-y-hidden">
                    { (tags === undefined) ? null :
                        ((tags.length >= 3) ? tags.slice(0,3).map((item) => {
                            return (<Tag 
                                        key={item}
                                        tech={item}/>)
                        }):
                            tags.map((item) => {
                                return(
                                    <Tag 
                                        key={item}
                                        tech={item}/>
                                );
                            }))
                        
                    }
                </div>
            </div>
        </Link>
    )
}

export default async function Projects() {
    const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
    }
    // Initalize app and database
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Fetch docs under the Projects collection
    const results = await getDocs(collection(db, "Projects"));

    // projects into project cards into an array to be mapped
    var projects = [];
    results.forEach((item) => {
        projects.push(
            <ProjectCard 
                key={item.id}
                id={item.id}
                data={item.data()}/>
        );
    });
    

    return (
        <div className = "bg-background1 min-h-screen transition-colors duration-1000 ease-in-out flex flex-row space-x-2 text-primary relative">
            <Header />
            <HeaderButton />
            <div className="w-9/10 h-full flex flex-col animate-pullup m-auto space-y-4">
                <h1 className="text-hightlight font-bold text-2xl xl:text-3xl h-[15vh] content-end w-9/10 ml-auto">
                    Projects
                </h1>
                <div className="min-h-full w-full grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
                    {projects.map((item) => {
                        return(
                            item
                        );
                    })}
                </div>
            </div>
        </div>  
    )
}