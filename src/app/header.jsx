import Image from "next/image";
import Script from "next/script";

export default function Header() {

    function script(){
        document.getElementById("HeaderHome").addEventListener("mouseover", function(){
            self.classlist.toggle("rotate-x-180");
        });
        document.getElementById("HeaderHome").addEventListener("mouseout", function(){
            self.classlist.toggle("rotate-x-180");
        });
    };

    var image1 = "/LightMode/RLogoLight.webp";
    return (
        <div className="bg-background2 h-screen w-28 text-center flex flex-col justify-between ">
            <div className=" ">
                <Image 
                    src={image1} 
                    className ="m-auto"
                    width="100" height="100"
                    alt="Logo"/>
                <h1 className="m-auto font-bold text-xs">Riley</h1>
            </div>

            <div className="w-full  flex flex-col">
                <div className="w-full h-[50px]  content-center 
                    perspective-distant"
                    id="HeaderHome"> 
                    <div className="cardcontainer">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src="/LightMode/HomeLight.webp"
                                width="50" height="50"
                                alt="Home"
                                id="HeaderHomeImg"/>
                            <Image
                                className="m-auto hidden"
                                src="/LightMode/Home2Light.webp"
                                width="50" height="50"
                                alt="Home"
                                id="HeaderHomeImg2"/>
                        </div>
                        <div className="cardback"> 
                            HOME
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50px] content-center perspective-distant"
                    id="Header"> 
                    <div className="cardcontainer">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src="/LightMode/PersonLight.webp"
                                width="50" height="50"
                                alt="About Me"
                                id="HeaderAboutImg"/>
                        </div>
                        <div className="cardback">
                            ABOUT
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50px] content-center perspective-distant"
                    id="Header"> 
                    <div className="cardcontainer">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src="/LightMode/BusinessLight.webp"
                                width="50" height="50"
                                alt="Experience"
                                id="HeaderExperienceImg"/>
                        </div>
                        <div className="cardback">
                            EXPERIENCE
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50px] content-center perspective-distant" 
                    id="Header">
                <div className="cardcontainer">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src="/LightMode/ProjectsLight.webp"
                                width="50" height="50"
                                alt="Projects"
                                id="HeaderProjectsImg"/>
                        </div>
                        <div className="cardback">
                            PROJECTS
                        </div>
                    </div> 
                </div>
                <div className="w-full h-[50px] content-center perspective-distant"
                    id="Header"> 
                    <div className="cardcontainer">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src="/LightMode/MailLight.webp"
                                width="50" height="50"
                                alt="Contact"
                                id="HeaderContactImg"/>
                        </div>
                        <div className="cardback">
                            CONTACT
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col space-y-3 space">
                <div className="relative w-full h-[25px] group cursor-pointer"
                    id="HeaderResume">  
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/ResumeColor.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LightMode/AttachLight.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                </div>
                <div className="relative w-full h-[25px] group cursor-pointer">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/GitHubColor.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LightMode/GitHubLight.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                </div>
                <div className="w-full h-[25px] relative group cursor-pointer">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LinkedInColor.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LightMode/LinkedInLight.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
            </div>
            <div className="w-full h-[25px] relative group cursor-pointer">
                <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/ItchIoColor.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LightMode/ItchIoLight.webp"
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                </div>
                <div className="w-full h-[40px] relative group cursor-pointer">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/DarkModeColor.webp"
                            width="40" height="40"
                            alt="Resume"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LightMode/DarkMode.webp"
                            width="40" height="40"
                            alt="Resume"/>
                    </div>

                </div>
            </div>
            <Script src="/Scripts/headerscript.js" />
        </div>
    )
}