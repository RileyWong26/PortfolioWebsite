'use client';
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";


const Header = () => {
    // Theme
    const [theme, setTheme] = useState("Light");

    // Image States
    const [Logo, setLogo] = useState("/LightMode/RLogoLight.webp");
    const [Home, setHome] = useState("/LightMode/HomeLight.webp");
    const [About, setAbout] = useState("/LightMode/AboutLight.webp");
    const [Experience, setExperience] = useState("/LightMode/ExperienceLight.webp");
    const [Projects, setProjects] = useState("/LightMode/ProjectsLight.webp");
    const [Contact, setContact] = useState("/LightMode/MailLight.webp");
    const [Resume, setResume] = useState("/LightMode/ResumeLight.webp");
    const [GitHub, setGitHub] = useState("/LightMode/GitHubLight.webp");
    const [LinkedIn, setLinkedIn] = useState("/LightMode/LinkedInLight.webp");
    const [ItchIo, setItchIo] = useState("/LightMode/ItchIoLight.webp");
    const [Mode, setMode] = useState("/LightMode/LightMode.webp");
    const [ModeColor, setModeColor] = useState("/LightMode/LightModeColor.webp");

    // Change which section is highlighted
    const changeSection = (newTheme, section) => {
        if (section === "") {
            document.getElementById("HeaderHome").classList.add("bg-background3");
            setHome(`/${newTheme}Mode/Home2${newTheme}.webp`);
        }
        else if (section === "About") {
            document.getElementById("HeaderAbout").classList.add("bg-background3");
            setAbout(`/${newTheme}Mode/About2${newTheme}.webp`);

        }
        else if (section === "Experience") {
            document.getElementById("HeaderExperience").classList.add("bg-background3");
            setExperience(`/${newTheme}Mode/Experience2${newTheme}.webp`);

        }
        else if (section === "Projects") {
            document.getElementById("HeaderProjects").classList.add("bg-background3");
            setProjects(`/${newTheme}Mode/Projects2${newTheme}.webp`);

        }
        else if (section === "Contact") {
            document.getElementById("HeaderContact").classList.add("bg-background3");
            setContact(`/${newTheme}Mode/Mail2${newTheme}.webp`);

        }
    };
 
2
    const switchTheme = (newTheme) => { 

        setLogo(`/${newTheme}Mode/RLogo${newTheme}.webp`);
        setHome(`/${newTheme}Mode/Home${newTheme}.webp`);
        setAbout(`/${newTheme}Mode/About${newTheme}.webp`);
        setExperience(`/${newTheme}Mode/Experience${newTheme}.webp`);
        setExperience(`/${newTheme}Mode/Experience${newTheme}.webp`);
        setProjects(`/${newTheme}Mode/Projects${newTheme}.webp`);
        setContact(`/${newTheme}Mode/Mail${newTheme}.webp`);
        setResume(`/${newTheme}Mode/Resume${newTheme}.webp`);
        setGitHub(`/${newTheme}Mode/GitHub${newTheme}.webp`);
        setLinkedIn(`/${newTheme}Mode/LinkedIn${newTheme}.webp`);
        setItchIo(`/${newTheme}Mode/ItchIo${newTheme}.webp`);
        setMode(`/${newTheme}Mode/${newTheme}Mode.webp`);
        setModeColor(`/${newTheme}Mode/${newTheme}ModeColor.webp`);
        
        setTheme(newTheme);
        localStorage.theme = newTheme;

        document.documentElement.classList.toggle("dark");

    };

    // Inital load useEffect
    useEffect(() => {
        var newTheme = theme;

        const section = window.location.pathname.split("/")[1];


        if (theme != localStorage.theme || (!("theme" in localStorage) && window.matchMedia("prefers-color-scheme: dark").matches )){
            theme === "Light" ? newTheme = "Dark" : newTheme = "Light"; 
            switchTheme(newTheme);
        }
        changeSection(newTheme, section);


    }, []);


    return (
        <div className="absolute bg-background2 h-screen w-screen xl:w-28 text-center flex flex-col justify-between z-10
            transition-all duration-1000 ease-in-out xl:sticky top-0 -translate-y-full xl:translate-y-0"
            id="Header">
            <div className="w-full opacity-0 h-[10vh] xl:h-[20vh] xl:opacity-100">
                <Image 
                    src={Logo} 
                    className ="m-auto w-full h-auto"
                    width={0} height={0}
                    alt="Logo"
                    quality={100}/>
                <h1 className="m-auto text-xs2 text-primary transition-colors duration-1000 ease-in-out">
                    rileywongwong @gmail.com
                </h1>
            </div>

            <div className="w-full h-2/3 xl:h-auto flex flex-col ">
                <Link className="w-full h-1/5 xl:h-[50px] content-center p-4 xl:p-0
                    perspective-distant group transition-colors duration-1000 ease-in-out" 
                    href="/"
                    id="HeaderHome"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        xl:relative xl:transform-3d xl:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 xl:w-full xl:absolute xl:backface-hidden ">
                            <Image
                                className="m-auto h-full w-auto "
                                src={Home}
                                width={0} height={0}
                                alt="Home"
                                id="HeaderHomeImg"
                                quality={100}/>
                        </div>
                        <div className="content-center text-hightlight text-2xl xl:w-full 
                            xl:h-full xl:absolute xl:rotate-y-180 xl:m-auto xl:backface-hidden xl:text-base"> 
                            HOME
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 xl:h-[50px] content-center perspective-distant group p-4 xl:p-0
                    transition-colors duration-1000 ease-in-out" 
                    href="/About"
                    id="HeaderAbout"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        xl:relative xl:transform-3d xl:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 xl:w-full xl:absolute xl:backface-hidden ">
                        
                            <Image
                                className="m-auto h-full w-auto"
                                src={About}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutImg"
                                quality={100}/>
                        
                        </div>
                        <div className="content-center text-hightlight text-2xl xl:w-full
                            xl:h-full xl:absolute xl:rotate-y-180 xl:m-auto xl:backface-hidden xl:text-base">
                            ABOUT
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 xl:h-[50px] content-center perspective-distant group p-4 xl:p-0
                    transition-colors duration-1000 ease-in-out" 
                    href="/Experience"
                    id="HeaderExperience"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        xl:relative xl:transform-3d xl:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 xl:w-full xl:absolute xl:backface-hidden">
                            <Image
                                className="m-auto w-auto h-full"
                                src={Experience}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceImg"
                                quality={100}/>
                        </div>
                        <div className="content-center text-hightlight text-2xl xl:w-full
                            xl:h-full xl:absolute xl:rotate-y-180 xl:m-auto xl:backface-hidden xl:text-base">
                            EXPERIENCE  
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 xl:h-[50px] content-center perspective-distant group p-4 xl:p-0
                    transition-colors duration-1000 ease-in-out" 
                    href="/Projects"
                    id="HeaderProjects">
                    <div className="w-full h-full flex flex-row space-x-4 
                        xl:relative xl:transform-3d xl:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 xl:w-full xl:absolute xl:backface-hidden">
                            <Image
                                className="m-auto w-auto h-full"
                                src={Projects}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsImg"
                                quality={100}/>
                        </div>
                        <div className="text-hightlight content-center text-2xl xl:w-full 
                            xl:h-full xl:absolute xl:rotate-y-180 xl:m-auto xl:backface-hidden xl:text-base">
                            PROJECTS
                        </div>
                    </div> 
                </Link>
                <Link className="w-full h-1/5 xl:h-[50px] content-center perspective-distant group p-4 xl:p-0
                    transition-colors duration-1000 ease-in-out"
                    href="/Contact"
                    id="HeaderContact"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        xl:relative xl:transform-3d xl:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 xl:w-full xl:absolute xl:backface-hidden">
                            <Image
                                className="m-auto w-auto h-full"
                                src={Contact}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactImg"
                                quality={100}/>
                        </div>
                        <div className="text-hightlight content-center text-2xl xl:w-full
                            xl:h-full xl:absolute xl:rotate-y-180 xl:m-auto xl:backface-hidden xl:text-base">
                            CONTACT
                        </div>
                    </div>
                </Link>
            </div>

            <div className="w-full h-1/10 xl:h-auto flex flex-row xl:flex-col space-y-3 space-x-3 -mx-3 xl:mx-0">
                <div className="w-1/5 xl:w-full xl:h-[40px] group cursor-pointer p-2 xl:p-1 z-1"
                    id="HeaderResume">  
                    <div className="w-full h-full hidden group-hover:block 
                        transition-all duration-300 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto "
                            src="/ResumeColor.webp"
                            width={0} height={0}
                            quality={100}
                            alt="ResumeColor"/>
                    </div>
                    <div className=" m-auto w-full h-full group-hover:hidden
                        transition-all duration-100 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={Resume}
                            width={0} height={0}
                            quality={100}
                            alt="Resume"/>
                    </div>
                </div>
                <a className=" w-1/5 xl:w-full xl:h-[40px] group cursor-pointer p-2  xl:p-1 z-1"
                    href="https://github.com/RileyWong26"
                    target="_blank">
                    <div className="w-full h-full group-hover:block
                        transition-opacity duration-300 ease-in-out hidden">
                        <Image 
                            className="m-auto h-full w-auto"
                            src="/GitHubColor.webp"
                            width={0} height={0}
                            quality={100}
                            alt="GitHubColor"/>
                    </div>
                    <div className="w-full h-full 
                        group-hover:hidden">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={GitHub}
                            width={0} height={0}
                            quality={100}
                            alt="GitHub"/>
                    </div>
                </a>
                <a className="w-1/5 xl:w-full xl:h-[40px] group cursor-pointer p-2 xl:p-1 z-1"
                    href="//www.linkedin.com/in/riley-wong-1051b2250"
                    target="_blank">
                    <div className=" w-full h-full group-hover:block hidden
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto"
                            src="/LinkedInColor.webp"
                            width={0} height={0}
                            alt="LinkedInColor"/>
                    </div>
                    <div className=" w-full h-full group-hover:hidden
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={LinkedIn}
                            width={0} height={0}
                            alt="LinkedIn"/>
                    </div>
                </a>
                <a className="w-1/5 xl:w-full xl:h-[40px] group cursor-pointer p-2 xl:p-1 z-1"
                    href="https://ryebread26.itch.io"
                    target="_blank">
                    <div className="m-auto w-full h-full hidden group-hover:block
                            transition-opacity duration-300 ease-in-out">
                            <Image 
                                className="m-auto h-full w-auto"
                                src="/ItchIoColor.webp"
                                width={0} height={0}
                                alt="ItchIoColor"/>
                    </div>
                    <div className="m-auto w-full h-full group-hover:hidden">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={ItchIo}
                            width={0} height={0}
                            alt="ItchIo"/>
                    </div>
                </a>
                <div className="w-1/5 xl:w-full xl:h-[40px] relative group cursor-pointer z-1"
                    id="HeaderTheme"
        
                    onClick={() => {[
                        switchTheme((theme === "Light") ? "Dark" : "Light") , 
                        changeSection(
                                (theme === "Light") ? "Dark" : "Light" ,
                                window.location.pathname.split("/")[1]
                            )
                        ]}
                        }>
                    <div className="m-auto w-full h-full hidden group-hover:block
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={ModeColor}
                            width={0} height={0}
                            alt="ThemeColor"/>
                    </div>
                    <div className="w-full h-full group-hover:hidden
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto h-full w-auto"
                            src={Mode}
                            width={0} height={0}
                            alt="Theme"/>
                    </div>

                </div>
            </div>
            <div className="w-full h-1/10 flex flex-row xl:hidden content-center space-x-10">
                <div className="w-1/4 h-full">
                    <Image 
                        className="ml-auto h-full w-auto hidden dark:block"
                        src={"/DarkMode/MailDark.webp"}
                        height={0} width={0}
                        alt={"MailContactDark"}/>
                    <Image 
                        className="ml-auto h-full w-auto dark:hidden"
                        src={"/LightMode/MailLight.webp"}
                        height={0} width={0}
                        alt={"MailContactLight"}/>
                </div>
                <h1 className="my-auto text-xl text-hightlight tracking-wider">
                    rileywongwong@gmail.com
                </h1>
            </div>
        </div>
    )
}

export default Header;