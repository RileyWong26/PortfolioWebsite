import Header from "@/app/header";
import Image from "next/image";
import HeaderButton from "../headerbutton";

export default async function About(){
    return (
        <div className = "bg-background1 w-screen min-h-screen transition-colors duration-1000 ease-in-out flex flex-row space-x-2 text-primary">
            <Header />
            <HeaderButton />

            <div className="w-full min-h-screen flex flex-col-reverse xl:flex-row justify-evenly py-10 space-y-5">
                <div className="m-auto w-4/5 min-h-[50vh] xl:h-full">
                    <div className="m-auto w-4/5 h-full flex flex-col space-y-8 xl:space-y-12 animate-pullup">
                        <h1 className="text-hightlight h-2/10 xl:h-3/10 content-center font-bold  text-2xl xl:text-3xl">About Me</h1>
                        <h1 className="text-xs xl:text-base leading-6">Hey, my name is Riley Wong, I am a developer passionate about creating robust software.  My love for creating started from trying to create both mods and games at age 10.  </h1>
                        <h1 className="text-xs xl:text-base leading-6">I am a team player who communicates effectively, faces problems critically and has the technical skills to tackle problems.  </h1>
                        <h1 className="text-xs xl:text-base leading-6">I am also passionate about music, and love to listen, play guitar and sing.</h1>
                    </div>
                </div>
                <div className="m-auto w-4/5 min-h-[33vh] xl:h-[50vh] animate-pullup">
                    <div className="w-full min-h-[33vh] perspective-distant content-center">
                        <div className="w-3/4 h-8/10 xl:w-2/3 relative transform-3d m-auto rounded-2xl 
                            transition-all duration-1000 ease-in-out xl:rotate-x-5 xl:rotate-y-20 scale-95 hover:-rotate-x-15 
                            hover:-rotate-y-25 hover:scale-120 hover:-translate-y-5"> 
                            <Image className="m-auto rounded-2xl h-full w-auto xl:w-full xl:h-auto"
                                src="/Images/GDSxLOJAM1.webp"
                                width={0} height={0}
                                quality={100}
                                alt="AboutMeImage"
                                unoptimized/>
                        </div>
                        <h1 className=" w-3/4 m-auto text-center mt-5 text-xs xl:text-sm"> Picture of me,(left most), and my friends winning the 2025 LoJam X GDS Game Jam</h1>
                    </div>
                </div>
            </div>
        
        </div>
    )
}