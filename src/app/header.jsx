'use client';
import Image from "next/image";
import Link from "next/link";
import React, {useEffect} from "react";
import { useTheme } from "next-themes";



const Header = () => {
    // Theme
    const {theme, setTheme} = useTheme('light');

    // Change which section is highlighted
    const changeSection = (section) => {
        if (section === "") {
            document.getElementById("HeaderHome").classList.add("current");
        }
        else if (section === "About") {
            document.getElementById("HeaderAbout").classList.add("current");

        }
        else if (section === "Experience") {
            document.getElementById("HeaderExperience").classList.add("current");

        }
        else if (section === "Projects") {
            document.getElementById("HeaderProjects").classList.add("current");

        }
        else if (section === "Contact") {
            document.getElementById("HeaderContact").classList.add("current");

        }
    };
 

    // Inital load useEffect
    useEffect(() => {

        const section = window.location.pathname.split("/")[1];

        changeSection(section);

    }, []);


    return (
        <nav className="absolute bg-background2 h-screen w-screen lg:max-w-30 text-center flex flex-col justify-between z-10
            transition-all duration-1000 ease-in-out lg:sticky top-0 -translate-y-full lg:translate-y-0"
            id="Header">
            {/*  Logo */}
            <div className="w-full opacity-0 h-[10vh] lg:h-[20vh] lg:opacity-100 p-4 ">
                <Image 
                    src={"/DarkMode/RLogoDark.webp"} 
                    className ="m-auto w-4/5 h-auto hidden dark:inline"
                    width={0} height={0}
                    alt="Logo"
                    quality={100}
                    unoptimized/>
                <Image 
                    src={"/LightMode/RLogoLight.webp"} 
                    className ="m-auto w-4/5 h-auto dark:hidden"
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
                    perspective-distant group transition-colors duration-1000 ease-in-out [.current]:bg-background3" 
                    href="/"
                    id="HeaderHome"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center group " 
                            id={"HeaderHomeImgContainer"}>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto dark:hidden group-[.current]:hidden"
                                src={"/LightMode/HomeLight.webp"}
                                width={0} height={0}
                                alt="Home"
                                id="HeaderHomeImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:inline group-[.current]:hidden"
                                src={"/DarkMode/HomeDark.webp"}
                                width={0} height={0}
                                alt="Home"
                                id="HeaderHomeImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden group-[.current]:inline dark:group-[.current]:hidden"
                                src={"/LightMode/Home2Light.webp"}
                                width={0} height={0}
                                alt="Home"
                                id="HeaderHomeImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:group-[.current]:inline"
                                src={"/DarkMode/Home2Dark.webp"}
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
                    transition-colors duration-1000 ease-in-out [.current]:bg-background3" 
                    href="/About"
                    id="HeaderAbout"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center group "
                            id={"HeaderAboutImgContainer"}>
                        
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto dark:hidden group-[.current]:hidden"
                                src={"/LightMode/AboutLight.webp"}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutImg"
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:inline group-[.current]:hidden"
                                src={"/DarkMode/AboutDark.webp"}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutImg"
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden group-[.current]:inline dark:group-[.current]:hidden"
                                src={"/LightMode/About2Light.webp"}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutLightSelectImg"
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:group-[.current]:inline"
                                src={"/DarkMode/About2Dark.webp"}
                                width={0} height={0}
                                alt="About Me"
                                id="HeaderAboutDarkSelectImg"
                                unoptimized/>
                        
                        </div>
                        <div className="content-center text-hightlight text-2xl lg:w-full
                            lg:h-full lg:absolute lg:rotate-y-180 lg:m-auto lg:backface-hidden lg:text-base">
                            ABOUT
                        </div>
                    </div>
                </Link>
                <Link className="w-full h-1/5 lg:h-[50px] content-center perspective-distant group p-4 lg:p-2
                    transition-colors duration-1000 ease-in-out [.current]:bg-background3" 
                    href="/Experience"
                    id="HeaderExperience"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center group" 
                            id={"HeaderExperienceImgContainer"}>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto dark:hidden group-[.current]:hidden"
                                src={"/LightMode/ExperienceLight.webp"}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:inline group-[.current]:hidden"
                                src={"/DarkMode/ExperienceDark.webp"}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden group-[.current]:inline dark:group-[.current]:hidden"
                                src={"/LightMode/Experience2Light.webp"}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceLightSelectImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:group-[.current]:inline"
                                src={"/DarkMode/Experience2Dark.webp"}
                                width={0} height={0}
                                alt="Experience"
                                id="HeaderExperienceDarkSelectImg"
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
                    transition-colors duration-1000 ease-in-out [.current]:bg-background3" 
                    href="/Projects"
                    id="HeaderProjects">
                    <div className="w-full h-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center group"
                            id={"HeaderProjectsImgContainer"}>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto dark:hidden group-[.current]:hidden"
                                src={"/LightMode/ProjectsLight.webp"}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:inline group-[.current]:hidden"
                                src={"/DarkMode/ProjectsDark.webp"}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden group-[.current]:inline dark:group-[.current]:hidden"
                                src={"/LightMode/Projects2Light.webp"}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsLightSelectImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto h-3/5 lg:h-full w-auto hidden dark:group-[.current]:inline"
                                src={"/DarkMode/Projects2Dark.webp"}
                                width={0} height={0}
                                alt="Projects"
                                id="HeaderProjectsDarkSelectImg"
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
                    transition-colors duration-1000 ease-in-out [.current]:bg-background3"
                    href="/Contact"
                    id="HeaderContact"> 
                    <div className="h-full w-full flex flex-row space-x-4 
                        lg:relative lg:transform-3d lg:group-hover:-rotate-y-180 transition-all duration-600 ease-in-out">
                        <div className="h-full w-1/3 lg:w-full lg:absolute lg:backface-hidden content-center group"
                            id={"HeaderContactImgContainer"}>
                            <Image
                                className="m-auto w-auto h-3/5 lg:h-full dark:hidden group-[.current]:hidden"
                                src={"/LightMode/MailLight.webp"}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto w-auto h-3/5 lg:h-full hidden dark:inline group-[.current]:hidden"
                                src={"/DarkMode/MailDark.webp"}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto w-auto h-3/5 lg:h-full hidden group-[.current]:inline dark:group-[.current]:hidden"
                                src={"/LightMode/Mail2Light.webp"}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactLightSelectImg"
                                quality={100}
                                unoptimized/>
                            <Image
                                className="m-auto w-auto h-3/5 lg:h-full hidden dark:group-[.current]:inline"
                                src={"/DarkMode/Mail2Dark.webp"}
                                width={0} height={0}
                                alt="Contact"
                                id="HeaderContactDarkSelectImg"
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
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-0 z-1"
                    href="https://docs.google.com/document/d/1nGHDpZ9HvGR8FkzPURvtzzub3NPhHUgyPH-FS1WBxu0/preview"
                    target="_blank"
                    id="HeaderResume">  
                    <div className="m-auto w-full h-full hidden group-hover:inline
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
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/ResumeLight.webp"}
                            width={0} height={0}
                            quality={100}
                            alt="Resume"
                            unoptimized/>
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full hidden dark:block"
                            src={"/DarkMode/ResumeDark.webp"}
                            width={0} height={0}
                            quality={100}
                            alt="Resume"
                            unoptimized/>
                    </div>
                </a>
                <a className=" w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-0 z-1"
                    href="https://github.com/RileyWong26"
                    target="_blank">
                    <div className="w-full h-full group-hover:inline
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
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/GitHubLight.webp"}
                            width={0} height={0}
                            quality={100}
                            alt="GitHub"
                            unoptimized/>
                        <Image  
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full hidden dark:block"
                            src={"/DarkMode/GitHubDark.webp"}
                            width={0} height={0}
                            quality={100}
                            alt="GitHub"
                            unoptimized/>
                    </div>
                </a>
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-0 z-1"
                    href="//www.linkedin.com/in/riley-wong-1051b2250"
                    target="_blank">
                    <div className=" w-full h-full group-hover:inline hidden
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
                            className="m-auto w-3/5 h-auto lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/LinkedInLight.webp"}
                            width={0} height={0}
                            alt="LinkedIn"
                            unoptimized/>
                        <Image 
                            className="m-auto w-3/5 h-auto lg:w-auto lg:h-full hidden dark:block"
                            src={"/DarkMode/LinkedInDark.webp"}
                            width={0} height={0}
                            alt="LinkedIn"
                            unoptimized/>
                    </div>
                </a>
                <a className="w-1/5 lg:w-full lg:h-[20px] group cursor-pointer p-3 lg:p-0 z-1"
                    href="https://ryebread26.itch.io"
                    target="_blank">
                    <div className="m-auto w-full h-full hidden group-hover:inline
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
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/ItchIoLight.webp"}
                            width={0} height={0}
                            alt="ItchIo"
                            unoptimized/>
                        <Image 
                            className="m-auto h-auto w-3/5 lg:w-auto lg:h-full hidden dark:block"
                            src={"/DarkMode/ItchIoDark.webp"}
                            width={0} height={0}
                            alt="ItchIo"
                            unoptimized/>
                    </div>
                </a>
                {/* Theme button */}
                <div className="w-1/5 lg:w-full lg:h-[40px] relative group cursor-pointer z-1"
                    id="HeaderTheme"
                    onClick={() => {{   
                        let newTheme;
                        (theme === 'dark') ?  newTheme = 'light' : newTheme='dark';
                        setTheme(newTheme);
                        localStorage.theme = newTheme;
                    }}
                        }>
                    <div className="m-auto w-full h-full hidden group-hover:inline
                        transition-opacity duration-300 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/LightModeColor.webp"}
                            width={0} height={0}
                            alt="ThemeColor"
                            unoptimized/>
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full hidden dark:inline"
                            src={"/DarkMode/DarkModeColor.webp"}
                            width={0} height={0}
                            alt="ThemeColor"
                            unoptimized/>
                    </div>
                    <div className="w-full h-full group-hover:hidden
                        transition-opacity duration-100 ease-in-out content-center">
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full dark:hidden"
                            src={"/LightMode/LightMode.webp"}
                            width={0} height={0}
                            alt="Theme"
                            unoptimized/>
                        <Image 
                            className="m-auto h-auto w-4/5 lg:w-auto lg:h-full hidden dark:inline"
                            src={"/DarkMode/DarkMode.webp"}
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