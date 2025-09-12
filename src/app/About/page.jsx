import Header from "@/app/header";
import Image from "next/image";
import HeaderButton from "../headerbutton";
import Link from "next/link";

export default async function About(){
    return (
            <section className = "bg-background1 max-w-screen min-h-screen transition-colors duration-1000 ease-in-out flex flex-row space-x-2 text-primary">
            <Header />
            <HeaderButton />
            <div className="w-full flex flex-col animate-pullup min-h-screen ">
                {/*Page Title */}
                <h1 className="text-hightlight h-[15vh] font-bold text-3xl w-4/5 mx-auto content-end ">
                    About Me
                </h1>
                {/*Page content */}
                <section className="w-full flex flex-col-reverse lg:flex-row py-10 space-y-5 lg:h-[80vh] content-center ">
                    {/* Left side text*/}
                    <div className="mx-auto w-full lg:min-h-[50vh] lg:h-full ">
                        <div className="lg:ml-auto lg:mr-0 m-auto w-4/5 h-full flex flex-col space-y-8 lg:space-y-12 justify-center">
                            <h2 className="text-base leading-6">Hi! My name is Riley Wong, I am a developer passionate about creating robust software.  My favourite works lies in creating software that solves issues and facilitates use for its users.  My love for developing started from creating both mods and games at age 10.  </h2>
                            <h2 className="text-base leading-6">I am a team player who communicates effectively, faces problems critically and has the technical skills to tackle any problems.  </h2>
                            <h2 className="text-base leading-6">In my spare time I like to listen to music, play guitar and sing.</h2>
                        </div>
                    </div>
                    {/*Right side Image and description */}
                    <div className="mx-auto w-full min-h-[33vh] lg:min-h-[50vh] animate-pullup content-center ">
                        <div className="w-full min-h-[33vh] perspective-distant content-center">
                            <div className="w-3/4 h-8/10 lg:w-2/3 relative transform-3d m-auto rounded-2xl 
                                transition-all duration-1000 ease-in-out lg:rotate-x-5 lg:rotate-y-20 scale-95 hover:-rotate-x-15 
                                hover:-rotate-y-25 hover:scale-120 hover:-translate-y-5"> 
                                <Image className="m-auto rounded-2xl h-full w-auto lg:w-full lg:h-auto"
                                    src="/Images/GDSxLOJAM1.webp"
                                    width={1000} height={1000}
                                    quality={100}
                                    alt="AboutMeImage"/>
                            </div>
                            <h2 className=" w-3/4 m-auto text-center mt-5 text-sm"> Picture of me,(left most), and my friends winning the 2025 LoJam X GDS Game Jam</h2>
                        </div>
                    </div>
                </section>
                <Link className="lg:pl-34 pl-14 text-primary w-8/9 lg:w-1/2 lg:-translate-y-20 flex flex-row text-xl space-x-4 content-center h-6"
                    href="/Experience"> 
                    <h2 className="content-center">
                        EXPERIENCE
                    </h2>
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