import Image from "next/image";
import Header from "@/app/header";
import Head from "next/head";
import Three from "./three";
import HeaderButton from "./headerbutton";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

export default async function Home() {

  return (
    <section className="bg-background1 w-screen min-h-screen font-Anonymous 
      transition-colors duration-1000 ease-in-out flex flex-col xl:flex-row space-x-2 relative">
      <Header />
      <HeaderButton />

      <section className="w-full max-w-screen min-h-screen h-screen flex flex-col justify-evenly ">
        <div className="w-full flex flex-col xl:flex-row justify-evenly content-center h-9/10">
          {/* Left Text*/}
          <div className="w-full xl:w-4/5 max-w-screen h-1/2 xl:h-auto my-auto content-end xl:content-center animate-pullup">
              <h1 className="m-auto text-primary w-3/4 leading-15 font-bold text-3xl animate-glitchtext ">
                Hi <br /> 
                I'm Riley Wong <br/> 
                Software Engineer
              </h1>
              <h1 className="m-auto  text-text2 w-3/4 text-lg ">
                Honours Computer science, 2029, Western University
              </h1>
          </div>
          {/* Right side hero 3d model*/}
          <div className="w-4/5 content-center animate-pullup overflow-clip m-auto h-1/2 xl:h-auto"
            id="HeroSection">
              <Suspense fallback={<Loading />}>
                <Three />
              </Suspense>
          </div>
          
           
        </div>
        <Link className="xl:pl-22 pl-14 text-primary w-8/9 xl:w-1/2 xl:-translate-y-40 flex flex-row text-xl space-x-4 content-center h-6"
            href="/About"> 
          <h1 className="content-center">
            ABOUT ME
          </h1>
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
      </section>
    </section>
  );
}
