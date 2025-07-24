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
        <nav className="absolute bg-background2 h-screen w-screen lg:max-w-30 text-center flex flex-col justify-between z-10
            transition-all duration-1000 ease-in-out lg:sticky top-0 -translate-y-full lg:translate-y-0"
            id="Header">
            {/*  Logo */}
            <div className="w-full opacity-0 h-[10vh] lg:h-[20vh] lg:opacity-100 p-4 ">
                <Image 
                    src={Logo} 
                    className ="m-auto w-4/5 h-auto"
                    width={0} height={0}
                    alt="Logo"
                    quality={100}
                    unoptimized/>
                <h1 className="mt-2 m-auto text-xs text-primary transition-colors duration-1000 ease-in-out">
                    rileywongwong @gmail.com
                </h1>
            </div>

            {/*  Page Redirections */}
            <nav className="w-full h-2/3 lg:h-auto flex flex-col ">
                <Link className="w-full h-1/5 lg:h-[50px] content-center p-4 lg:p-2
                    perspective-distant group transition-colors duration-1000 ease-in-out" 
                    href="/"
                    id="HeaderHome"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center ">
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto "
                                src={Home}
                                width={0} height={0}
                                alt="Home"
                                id="HeaderHomeImg"
                                quality={100}
                                unoptimized/>
                        </div>
                        <div className="content-center text-hightlight text-2xl lg:w-full 
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base"> 
                            HOME
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 lg:h-[50px] content-center perspective-distant group p-4 lg:p-2
                    transition-colors duration-1000 ease-in-out" 
                    href="/About"
                    id="HeaderAbout"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center">
                        
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto"
                                src={About}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutImg"
                                unoptimized/>
                        
                        </div>
                        <div className="content-center text-hightlight text-2xl lg:w-full
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base">
                            ABOUT
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 lg:h-[50px] content-center perspective-distant group p-4 lg:p-2
                    transition-colors duration-1000 ease-in-out" 
                    href="/Experience"
                    id="HeaderExperience"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center">
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto"
                                src={Experience}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceImg"
                                quality={100}
                                unoptimized/>
                        </div>
                        <div className="content-center text-hightlight text-2xl lg:w-full
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base">
                            EXPERIENCE  
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 lg:h-[50px] content-center perspective-distant group p-4 lg:p-2
                    transition-colors duration-1000 ease-in-out" 
                    href="/Projects"
                    id="HeaderProjects">
                    <div className="w-full h-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center">
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto"
                                src={Projects}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsImg"
                                quality={100}
                                unoptimized/>
                        </div>
                        <div className="text-hightlight content-center text-2xl lg:w-full 
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base">
                            PROJECTS
                        </div>
                    </div> 
                </Link>
                <Link className="w-full h-1/5 lg:h-[50px] content-center perspective-distant group p-4 lg:p-2
                    transition-colors duration-1000 ease-in-out"
                    href="/Contact"
                    id="HeaderContact"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center">
                            <Image
                                className="m-auto w-auto h-3/5 lg:h-full"
                                src={Contact}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactImg"
                                quality={100}
                                unoptimized/>
                        </div>
                        <div className="text-hightlight content-center text-2xl lg:w-full
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base">
                            CONTACT
                        </div>
                    </div>
                </Link>
            </nav>

            {/*Social external links */}
            <nav className="w-full h-1/10 lg:h-auto flex flex-row lg:flex-col space-y-3  lg:mx-0 ">
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-1 z-1"
                    href="https://docs.google.com/document/d/1nGHDpZ9HvGR8FkzPURvtzzub3NPhHUgyPH-FS1WBxu0/preview"
                    target="_blank"
                    id="HeaderResume">  
                    <div className="w-full h-full hidden group-hover:block 
                        transition-all duration-300 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src="/ResumeColor.webp"
                            width={0} height={0}
                            quality={100}
                            alt="ResumeColor"
                            unoptimized/>
                    </div>
                    <div className=" m-auto w-full h-full group-hover:hidden
                        transition-all duration-100 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src={Resume}
                            width={0} height={0}
                            quality={100}
                            alt="Resume"
                            unoptimized/>
                    </div>
                </a>
                <a className=" w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-1 z-1"
                    href="https://github.com/RileyWong26"
                    target="_blank">
                    <div className="w-full h-full group-hover:block
                        transition-opacity duration-300 ease-in-out hidden content-center">
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src="/GitHubColor.webp"
                            width={0} height={0}
                            quality={100}
                            alt="GitHubColor"
                            unoptimized/>
                    </div>
                    <div className="w-full h-full 
                        group-hover:hidden content-center">
                        <Image  
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src={GitHub}
                            width={0} height={0}
                            quality={100}
                            alt="GitHub"
                            unoptimized/>
                    </div>
                </a>
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-1 z-1"
                    href="//www.linkedin.com/in/riley-wong-1051b2250"
                    target="_blank">
                    <div className=" w-full h-full group-hover:block hidden
                        transition-opacity duration-300 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src="/LinkedInColor.webp"
                            width={0} height={0}
                            alt="LinkedInColor"
                            unoptimized/>
                    </div>
                    <div className=" w-full h-full group-hover:hidden
                        transition-opacity duration-100 ease-in-out content-center">
                        <Image 
                            className="m-auto w-3/5 h-auto lg:w-auto lg:h-full"
                            src={LinkedIn}
                            width={0} height={0}
                            alt="LinkedIn"
                            unoptimized/>
                    </div>
                </a>
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-1 z-1"
                    href="https://ryebread26.itch.io"
                    target="_blank">
                    <div className="m-auto w-full h-full hidden group-hover:block
                            transition-opacity duration-300 ease-in-out content-center">
                            <Image 
                                className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                                src="/ItchIoColor.webp"
                                width={0} height={0}
                                alt="ItchIoColor"
                                unoptimized/>
                    </div>
                    <div className="m-auto w-full h-full group-hover:hidden content-center">
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full"
                            src={ItchIo}
                            width={0} height={0}
                            alt="ItchIo"
                            unoptimized/>
                    </div>
                </a>
                {/* Theme button */}
                <div className="w-1/5 lg:w-full lg:h-[40px] relative group cursor-pointer z-1"
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
                        transition-opacity duration-300 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full"
                            src={ModeColor}
                            width={0} height={0}
                            alt="ThemeColor"
                            unoptimized/>
                    </div>
                    <div className="w-full h-full group-hover:hidden
                        transition-opacity duration-100 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full"
                            src={Mode}
                            width={0} height={0}
                            alt="Theme"
                            unoptimized/>
                    </div>

                </div>
            </nav>
            {/*Mobile only contact information */}
            <section className="w-full h-[13%] flex flex-row lg:hidden content-center space-x-5 p-4">
                <div className="w-1/3 h-full content-center">
                    <Image 
                        className="m-auto h-3/5 w-auto hidden dark:block"
                        src={"/DarkMode/MailDark.webp"}
                        height={0} width={0}
                        alt={"MailContactDark"}
                        unoptimized/>
                    <Image 
                        className="ml-auto h-3/5 w-auto dark:hidden"
                        src={"/LightMode/MailLight.webp"}
                        height={0} width={0}
                        alt={"MailContactLight"}
                        unoptimized/>
                </div>
                <h1 className="my-auto text-base text-hightlight">
                    rileywongwong@gmail.com
                </h1>
            </section>
        </nav>
    )
}

export default Header;