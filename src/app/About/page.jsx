import Header from "@/app/header";
import Image from "next/image";

export default function About(){
    return (
        <div className = "bg-background1 w-screen h-screen transition-colors duration-1000 ease-in-out flex flex-row space-x-2 text-primary">
            <Header />
            <div className="w-full h-full flex flex-row justify-evenly ">
                <div className="w-4/5 h-full">
                    <div className="w-4/5 h-full flex flex-col ml-auto animate-pullup">
                        <h1 className="text-hightlight h-3/10 content-center font-bold text-3xl">About Me</h1>
                        <h1 className=" h-2/10 leading-6">Hey, my name is Riley Wong, I am a developer passionate about creating robust software.  My love for creating started from trying to create both mods and games at age 10.  </h1>
                        <h1 className=" h-2/10 leading-6">I am a team player who communicates effectively, faces problems critically and has the technical skills to tackle problems.  </h1>
                        <h1 className=" h-2/10 leading-6">I am also passionate about music, and love to listen, play guitar and sing.</h1>
                    </div>
                </div>
                <div className="w-4/5  h-full animate-pullup">
                    <div className="w-full h-full perspective-distant content-center">
                        <div className="w-1/2 aspect-3/2 bg-black relative transform-3d m-auto rounded-2xl 
                            transition-all duration-1000 ease-in-out rotate-x-5 rotate-y-20 scale-95 hover:-rotate-x-15 hover:-rotate-y-25 hover:scale-120 hover:-translate-y-5"> 
                            <Image className="m-auto rounded-2xl h-full w-full"
                                src="/Images/GDSxLOJAM1.png"
                                width={0} height={0}
                                objectFit="contain"
                                layout="fill"   
                                alt="AboutMeImage"/>
                        </div>
                        <h1 className=" w-3/4 m-auto text-center mt-5 text-sm"> Picture of me,(left most), and my friends winning the 2025 LoJam X GDS Game Jam</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}