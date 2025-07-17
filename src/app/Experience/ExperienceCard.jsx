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
            <div className="h-2/10 w-full flex flex-row-reverse group">
                <div className="w-1/30 aspect-square relative -translate-x-full 
                    group-hover:translate-x-0 group-hover:-translate-y-1/3
                    transition-transform duration-500 ease-in-out">
                
                    <Image className="w-full h-auto hidden dark:block"
                        src="/DarkMode/ArrowUpDarkMode.webp"
                        width={0} height={0}
                        quality={100}
                        alt=""/>
                    <Image className=" w-full h-auto dark:hidden"
                        src="/LightMode/ArrowUpLightMode.webp"
                        width={0} height={0}
                        quality={100}
                        alt=""/>
                </div>
                <h1 className="w-full content-center text-base xl:text-xl">
                    {title}
                </h1>
            </div>
            <h1 className="text-text2 h-1/10 text-sm xl:text-lg ">
                {role}
            </h1>
            <h1 className="text-xs xl:text-base h-5/10">
                {description}
            </h1>
            <h1 className="text-right h-1/10 text-xs xl:text-base text-text2">
                {startDate} {(endDate === undefined || endDate === "") ? "" : "-" } {endDate}
            </h1>
        </Link>
    )
}