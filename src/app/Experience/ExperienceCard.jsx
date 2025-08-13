"use client"
import Link from "next/link";
import Image from "next/image";

export default function ExperienceCard({title, data}){
    const role = data.Role;
    const description = data.Description;
    const startDate = data.StartDate;
    const endDate = data.EndDate;

    return (
        <Link className="w-full h-[33vh] hover:bg-hightlight/20 rounded-2xl p-5 flex flex-col group space-y-2 
            transition-all duration-300 ease-in-out" 
            href={{
                pathname:`/Experience/${title}`,
            }}
            passHref
            onMouseEnter={() => {
                const doc = document.getElementById(title);
                (doc === null) ? null : doc.classList.toggle("animate-pullup2");
                document.getElementById("ExperienceImageContainer").classList.toggle("animate-turn");
            }}
            onMouseLeave={()=> {
                const doc = document.getElementById(title);
                (doc === null) ? null : doc.classList.toggle("animate-pullup2");
                document.getElementById("ExperienceImageContainer").classList.toggle("animate-turn");
            }}>
            <div className="w-full flex flex-row-reverse group relative">
                <div className="absolute left-9/10  aspect-square 
                    group-hover:translate-x-1/2 group-hover:-translate-y-1/6
                    transition-transform duration-500 ease-in-out">
                
                    <Image className="w-auto h-full lg:w-3/5 lg:h-auto hidden dark:block"
                        src="/DarkMode/ArrowUpDarkMode.webp"
                        width={40} height={40}
                        quality={100}
                        alt=""/>
                    <Image className="w-auto h-full lg:w-3/5 lg:h-auto dark:hidden"
                        src="/LightMode/ArrowUpLightMode.webp"
                        width={40} height={40}
                        quality={100}
                        alt=""/>
                </div>
                <h1 className="w-full content-center text-xl ">
                    {title}
                </h1>
            </div>
            <h1 className="text-text2 text-lg ">
                {role}
            </h1>
            <h1 className="text-base h-5/10 text-wrap truncate">
                {description}
            </h1>
            <h1 className="text-right h-1/10 text-base text-text2 text-balanced">
                {startDate} {(endDate === undefined || endDate === "") ? "" : "-" } {endDate}
            </h1>
        </Link>
    )
}