import Header from "@/app/header";
import Image from "next/image";
import Link from "next/link";
import HeaderButton from "../headerbutton";
import { Suspense } from "react";

function Tag({tech}){
    return (
        <h1 className="text-white bg-tag px-4 py-1 rounded-2xl text-xs">
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
                    fill
                    key={id}
                    alt="Project Image"
                    priority={true}
                    quality={100}
                    placeholder="empty"
                   />
            }
            
            <section className="bg-gradient-to-b from-0% to-30% from-black/10 to-black/60 w-full h-1/4 px-4 relative 
                group-hover:h-full group-hover:to-50% translate-all duration-500 ease-in-out flex flex-col space-y-0.5 lg:space-y-1 ">
                    
                <div className="h-1/20 group-hover:h-1/2 transition-all duration-500 ease-in-out relative"/>
                    <h1 className="w-19/20 text-xl truncate">
                        {id}
                    </h1>
                    <div className="left-9/10 top-1/10 absolute aspect-square -translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 
                        transition-all duration-500 ease-in-out">
                        <Image 
                            className="w-full h-auto"
                            alt="Arrow up"
                            src={"/DarkMode/ArrowUpDarkMode.webp"}
                            width={0} height={0}
                            quality={100}/>
                    </div>
                <div className="w-full hidden lg:inline h-1/30 transition-all duration-500 ease-in-out text-transparent 
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
                
            </section>
        </Link>
    )
}

export default async function Projects() {
    // Fetch data from backend 
    const sortedData = await fetch("https://5lghnqwcha.execute-api.us-east-1.amazonaws.com/projects", {
        method: 'GET',
        next: {
            revalidate: parseInt(process.env.REVALIDATE),
        },
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data.body;
        })
        .catch((err) => {
            console.log(err); 
            return {};
        });

    // projects into project cards into an array to be mapped
    var projects = [];
    const keys = Object.keys(sortedData);
    keys.map((key) => {
        projects.push(
            <ProjectCard 
                key={key}
                id={key}
                data={sortedData[key]}/>
        );
    });

    return (
        <section className="bg-background1 min-h-screen  max-w-screen transition-colors 
            duration-1000 ease-in-out flex flex-row text-primary relative">
            <Header />
            <HeaderButton />
            <div className="w-9/10 h-full flex flex-col animate-pullup space-y-4 mx-auto">
                <h1 className="text-hightlight font-bold text-3xl h-[15vh] content-end w-9/10 ml-auto">
                    Projects
                </h1>
                <div className="w-full xl:w-9/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto">
                    <Suspense placeholder={<Loading />}>
                        {projects.map((item) => {
                            return(
                                item
                            );
                        })}
                    </Suspense>
                </div>
                <Link className="lg:pl-34 pl-14 text-primary w-8/9 lg:w-1/2 mt-4 flex flex-row text-xl space-x-4 content-center h-6 "
                    href="/Contact"> 
                    <h1 className="content-center">
                        CONTACT
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
                </Link>
            </div>
        </section>  
    )
}