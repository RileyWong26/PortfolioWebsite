"use client";
import Image from "next/image";

export default function HeaderButton() {
    return(
        <div className="h-[10vh] aspect-square ml-auto -translate-x-1/2 bg-background2 rounded-4xl flex flex-col 
            space-y-2 content-center group left-3/4 absolute xl:hidden transition-all duration-1000 ease-in-out"
                id="HeaderButton"
                onClick={() => {
                    document.getElementById("HeaderButton").classList.toggle("open");
                    const header = document.getElementById("Header");
                    if(header){
                        header.classList.toggle("-translate-y-full");
                    };

                }}>
                <Image className="mx-auto mt-auto rounded-4xl group-[.open]:rotate-45 group-[.open]:translate-y-2.5 
                    transition-transform duration-500 ease-in-out dark:hidden"
                    src={"LightMode/Line.webp"}
                    alt={"Line1"}
                    width={40}height={0}/>
                <Image className="mx-auto rounded-4xl group-[.open]:opacity-0 transition-all duration-500 ease-in-out 
                    dark:hidden"
                    src={"LightMode/Line.webp"}
                    alt={"Line2"}
                    width={40}height={0}/>
                <Image className="mx-auto mb-auto rounded-4xl group-[.open]:-rotate-45 group-[.open]:-translate-y-2.5 
                    transition-transform duration-500 ease-in-out dark:hidden"
                    src={"LightMode/Line.webp"}
                    alt={"Line3"}
                    width={40}height={0}/>
                <Image className="mx-auto mt-auto rounded-4xl group-[.open]:rotate-45 group-[.open]:translate-y-2.5 
                    transition-transform duration-500 ease-in-out hidden dark:inline"
                    src={"DarkMode/Line.webp"}
                    alt={"Line1"}
                    width={40}height={0}/>
                <Image className="mx-auto rounded-4xl group-[.open]:opacity-0 transition-all 
                    duration-500 ease-in-out hidden dark:inline"
                    src={"DarkMode/Line.webp"}
                    alt={"Line2"}
                    width={40}height={0}/>
                <Image className="mx-auto mb-auto rounded-4xl group-[.open]:-rotate-45 hidden
                    group-[.open]:-translate-y-2.5 transition-transform duration-500 ease-in-out dark:inline"
                    src={"DarkMode/Line.webp"}
                    alt={"Line3"}
                    width={40}height={0}/>
        </div>
    )
}