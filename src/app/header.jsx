'use client';
import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";


export default function Header() {
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

    const changeSection = (newTheme, section) => {
        if (section === "") {
            document.getElementById("HeaderHome").classList.add("bg-background3", "dark:bg-background3dark");
            setHome(`/${newTheme}Mode/Home2${newTheme}.webp`);
        }
        else if (section === "About") {
            document.getElementById("HeaderAbout").classList.add("bg-background3", "dark:bg-background3dark");
            setAbout(`/${newTheme}Mode/About2${newTheme}.webp`);

        }
        else if (section === "Experience") {
            document.getElementById("HeaderExperience").classList.add("bg-background3", "dark:bg-background3dark");
            setExperience(`/${newTheme}Mode/Experience2${newTheme}.webp`);

        }
        else if (section === "Projects") {
            document.getElementById("HeaderProjects").classList.add("bg-background3", "dark:bg-background3dark");
            setProjects(`/${newTheme}Mode/Projects2${newTheme}.webp`);

        }
        else if (section === "Contact") {
            document.getElementById("HeaderContact").classList.add("bg-background3", "dark:bg-background3dark");
            setContact(`/${newTheme}Mode/Mail2${newTheme}.webp`);

        }
    };
 
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
        <div className="bg-background2 h-screen w-28 text-center flex flex-col justify-between dark:bg-background2dark transition-colors duration-1000 ease-in-out">
            
            <div className="">
                <Image 
                    src={Logo} 
                    className ="m-auto"
                    width="100" height="100"
                    alt="Logo"/>
                <h1 className="m-auto font-bold text-xs text-black dark:text-white transition-colors duration-1000 ease-in-out">Riley</h1>
            </div>

            <div className="w-full  flex flex-col">
                <Link className="w-full h-[50px]  content-center 
                    perspective-distant group transition-colors duration-1000 ease-in-out" href="/"
                    id="HeaderHome"> 

                    <div className="cardcontainer group-hover:rotate-y-180 ">
                        <div className="cardfront">
                            
                            <Image
                                className="m-auto"
                                src={Home}
                                width="50" height="50"
                                alt="Home"
                                id="HeaderHomeImg"/>
                            
                        </div>
                        <div className="cardback"> 
                            HOME
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-[50px] content-center perspective-distant group
                    transition-colors duration-1000 ease-in-out" 
                    href="/About"
                    id="HeaderAbout"> 
                    
                    <div className="cardcontainer group-hover:rotate-y-180">
                        <div className="cardfront">
                        
                            <Image
                                className="m-auto"
                                src={About}
                                width="50" height="50"
                                alt="About Me"
                                id="HeaderAboutImg"/>
                        
                        </div>
                        <div className="cardback">
                            ABOUT
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-[50px] content-center perspective-distant group
                    transition-colors duration-1000 ease-in-out" 
                    href="/Experience"
                    id="HeaderExperience"> 
                    <div className="cardcontainer group-hover:rotate-y-180">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src={Experience}
                                width="50" height="50"
                                alt="Experience"
                                id="HeaderExperienceImg"/>
                        </div>
                        <div className="cardback">
                            EXPERIENCE
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-[50px] content-center perspective-distant group
                    transition-colors duration-1000 ease-in-out" 
                    href="/Projects"
                    id="HeaderProjects">
                    <div className="cardcontainer group-hover:rotate-y-180">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src={Projects}
                                width="50" height="50"
                                alt="Projects"
                                id="HeaderProjectsImg"/>
                        </div>
                        <div className="cardback">
                            PROJECTS
                        </div>
                    </div> 
                </Link>
                <Link className="w-full h-[50px] content-center perspective-distant group
                    transition-colors duration-1000 ease-in-out"
                    href="/Contact"
                    id="HeaderContact"> 
                    <div className="cardcontainer group-hover:rotate-y-180">
                        <div className="cardfront">
                            <Image
                                className="m-auto"
                                src={Contact}
                                width="50" height="50"
                                alt="Contact"
                                id="HeaderContactImg"/>
                        </div>
                        <div className="cardback">
                            CONTACT
                        </div>
                    </div>
                </Link>
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
                            alt="ResumeColor"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={Resume}
                            width="25" height="25"
                            alt="Resume"/>
                    </div>
                </div>
                <a className="relative w-full h-[25px] group cursor-pointer"
                    href="https://github.com/RileyWong26"
                    target="_blank">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/GitHubColor.webp"
                            width="25" height="25"
                            alt="GitHubColor"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={GitHub}
                            width="25" height="25"
                            alt="GitHub"/>
                    </div>
                </a>
                <a className="w-full h-[25px] relative group cursor-pointer"
                    href="//www.linkedin.com/in/riley-wong-1051b2250"
                    target="_blank">
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/LinkedInColor.webp"
                            width="25" height="25"
                            alt="LinkedInColor"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={LinkedIn}
                            width="25" height="25"
                            alt="LinkedIn"/>
                    </div>
            </a>
            <a className="w-full h-[25px] relative group cursor-pointer"
                href="https://ryebread26.itch.io"
                target="_blank">
                <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src="/ItchIoColor.webp"
                            width="25" height="25"
                            alt="ItchIoColor"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={ItchIo}
                            width="25" height="25"
                            alt="ItchIo"/>
                    </div>
                </a>
                <div className="w-full h-[40px] relative group cursor-pointer"
                    id="HeaderTheme"
        
                    onClick={() => {[switchTheme((theme === "Light") ? "Dark" : "Light") , changeSection((theme === "Light") ? "Dark" : "Light" ,window.location.pathname.split("/")[1])]}}>
                    <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={ModeColor}
                            width="40" height="40"
                            alt="ThemeColor"/>
                    </div>
                    <div className="absolute w-full h-full group-hover:opacity-0 
                        transition-opacity duration-100 ease-in-out">
                        <Image 
                            className="m-auto"
                            src={Mode}
                            width="40" height="40"
                            alt="Theme"/>
                    </div>

                </div>
            </div>
        </div>
    )
}