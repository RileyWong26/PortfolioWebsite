"use client"
import Link from "next/link";
import Image from "next/image";

function Tag({tech}){
    return (
        <h1 className="text-superhighlight font-bold bg-hightlight/40 px-4 py-1 rounded-2xl text-xs tracking-widest ">
            {tech}
        </h1>
    )
}

export default function ExperienceCard({title, data}){
    const role = data.Role;
    const description = data.Description;
    const startDate = data.StartDate;
    const endDate = data.EndDate;
    const tags = data.Tags

    function handleFocus() {
        const cards = document.getElementsByClassName("experience-card");
        for(let i = 0; i<cards.length; i++){
            const curr = cards[i];
            if(curr.id !== `Experience ${title}`){
                curr.classList.add("opacity-65")
            }
        }
    }
    function removeFocus(){
        const cards = document.getElementsByClassName("experience-card");
        for(let i = 0; i<cards.length; i++){
            const curr = cards[i];
            if(curr.id !== `Experience ${title}`){
                curr.classList.remove("opacity-65")
            }
        }
    }

    return (
        <Link className="w-full h-[30vh] lg:h-[25vh] hover:bg-linear-to-b from-background1 to-hightlight/20 rounded-2xl p-5 flex flex-col group space-y-2 
            transition-all duration-300 ease-in-out experience-card" 
            id={`Experience ${title}`}
            href={{
                pathname:`/Experience/${title}`,
            }}
            passHref
            onMouseEnter={() => {
                const doc = document.getElementById(title);
                (doc === null) ? null : doc.classList.toggle("animate-pullup2");
                document.getElementById("ExperienceImageContainer").classList.toggle("animate-turn");
                handleFocus();
            }}
            onMouseLeave={()=> {
                const doc = document.getElementById(title);
                (doc === null) ? null : doc.classList.toggle("animate-pullup2");
                document.getElementById("ExperienceImageContainer").classList.toggle("animate-turn");
                removeFocus();
            }}>
            <div className="w-full flex flex-row-reverse group relative">
                <div className="absolute left-9/10  aspect-square 
                    group-hover:translate-x-1/2 group-hover:-translate-y-1/6
                    transition-transform duration-500 ease-in-out">
                
                    <Image className="w-auto h-full md:w-3/5 md:h-auto hidden dark:block"
                        src="/DarkMode/ArrowUpDarkMode.webp"
                        width={40} height={40}
                        quality={100}
                        alt=""/>
                    <Image className="w-auto h-full md:w-3/5 md:h-auto dark:hidden"
                        src="/LightMode/ArrowUpLightMode.webp"
                        width={40} height={40}
                        quality={100}
                        alt=""/>
                </div>
                <h2 className="w-full content-center text-xl ">
                    {title}
                </h2>
            </div>
            <h2 className="text-text2 text-lg ">
                {role}
            </h2>
            <div className="text-base line-clamp-4">
                <h2 id="description" 
                    className="">
                    {description}
                </h2>
            </div>
            <h2 className="mt-auto text-base text-text2 text-balanced flex flex-col lg:flex-row">
                <div className="hidden lg:flex flex-row space-x-1 lg:max-w-1/2 ">
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
                <div className="text-right w-full">
                    {startDate} {(endDate === undefined || endDate === "") ? "" : "-" } {endDate}
                </div>
            </h2>
        </Link>
    )
}