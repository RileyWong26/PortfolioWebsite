import Image from "next/image";
import Header from "@/app/header";
import Three from "./three";
import HeaderButton from "./headerbutton";
import { Suspense } from "react"; 
import Loading from "./loading";
import Link from "next/link";

export default async function Home() {

  return (
    <section className="bg-background1 w-screen min-h-screen font-Anonymous 
      transition-colors duration-1000 ease-in-out flex flex-col lg:flex-row space-x-2 relative">
      <Header />
      <HeaderButton />

      <section className="w-full max-w-screen min-h-screen h-screen flex flex-col justify-evenly animate-pullup">
        <div className="w-full flex flex-col lg:flex-row justify-evenly content-center h-9/10">
          {/* Left Text*/}
          <div className="w-full lg:w-4/5 max-w-screen my-auto content-end lg:content-center ">
              <h1 className="m-auto text-primary w-3/4 leading-15 font-bold text-3xl ">
                Hi <br /> 
                I'm Riley Wong <br/> 
                Software Developer
              </h1>
              <p className="m-auto text-text2 w-3/4 text-lg ">
                I am developer passionate about crafting user-based, innovative, and versatile software applications.  
                My favourite work lies in building applications that are not only driven to help simplify peoples' everyday lives, but are also meticulously built for performance and usability.  
              </p>
              <Link className="mx-auto mt-10 text-primary w-3/4 flex flex-row text-xl space-x-4 content-center h-6"
                  href="/About"> 
                <h2 className="content-center">
                  ABOUT ME
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
          {/* Right side hero 3d model*/}
          <div className="w-4/5 content-center overflow-clip m-auto h-1/2 lg:h-auto"
            id="HeroSection">
              <Suspense fallback={<Loading />}>
                <Three />
              </Suspense>
          </div>
        </div>
      </section>
    </section>
  );
}
