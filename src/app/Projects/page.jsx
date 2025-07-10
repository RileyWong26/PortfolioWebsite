import Header from "@/app/header";
import {initializeApp} from "firebase/app";
import {getFirestore, getDocs, collection} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
function Tag({tech}){
    return (
        <h1 className="text-white bg-tag px-4 py-1 rounded-2xl text-xs">
            {tech}
        </h1>
    )
}
function ProjectCard({id, data}) {
    return(
        <Link className="bg-hightlight aspect-square text-white rounded-2xl content-end overflow-hidden group relative shadow-2xl"
            href={
                `/Projects/${id}`
            }>
            {(data.Image === undefined || data.Image === "") ? null : 
                
                <Image 
                    src={data.Image}
                    className="absolute w-full h-full"
                    key={id}
                    alt="Project Image"
                    unoptimized
                    fill
                   />
            }
            
            <div className="bg-gradient-to-b from-0% to-30% from-black/10 to-black/60 w-full h-1/4 px-4 relative
                group-hover:h-full group-hover:to-50% translate-all duration-500 ease-in-out flex flex-col space-y-1 ">
                    
                <div className="h-1/20 group-hover:h-1/2 transition-all duration-500 ease-in-out"/>
                <div className="flex flex-row ">
                    <h1 className="w-19/20">
                        {id}
                    </h1>
                    <div className="w-1/20 aspect-square relative -translate-x-1/2 group-hover:-translate-y-1/2 group-hover:translate-x-1/2
                    transition-transform duration-500 ease-in-out">
                        <Image 
                            alt="Arrow up"
                            src={"/DarkMode/ArrowUpDarkMode.webp"}
                            objectFit="contain"
                            layout="fill"/>
                    </div>
                </div>
                <div className="h-1/30 text-wrap transition-all duration-500 ease-in-out text-transparent 
                    text-xs group-hover:h-1/4 group-hover:text-alt">
                    { (data.Description === undefined) ? null :
                        data.Description
                    }
                </div>
                <div className="flex flex-row space-x-1">
                    { (data.Tags === undefined) ? null :
                        data.Tags.map((item) => {
                            return(
                                <Tag 
                                    key={item}
                                    tech={item}/>
                            );
                        })
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
            <div className="w-9/10 h-full flex flex-col animate-pullup m-auto space-y-4">
                <h1 className="text-hightlight font-bold text-3xl h-[15vh] content-end w-9/10 ml-auto">
                    Projects
                </h1>
                <div className="min-h-full w-full grid grid-cols-4 gap-4 mb-4">
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