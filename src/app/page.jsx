import Image from "next/image";
import Header from "@/app/header";
import Head from "next/head";
import Three from "./three";
import HeaderButton from "./headerbutton";

export default async function Home() {

  return (
    <div className="bg-background1 w-screen min-h-screen font-Anonymous 
      transition-colors duration-1000 ease-in-out flex flex-col xl:flex-row space-x-2 relative">
      <Header />
      <HeaderButton />

      <div className="w-full max-w-screen min-h-screen flex flex-col xl:flex-row justify-evenly ">
        <div className="w-full xl:w-4/5 max-w-screen h-screen content-center animate-pullup ">
            <h1 className="m-auto text-primary w-3/4  leading-15 font-bold text-3xl animate-glitchtext ">
              Hi <br /> 
              I'm Riley <br/> 
              Software Engineer
            </h1>
            <h1 className="m-auto  text-text2 w-3/4 text-lg ">
              Computer science, 2029, Western University
            </h1>
        </div>
        <div className="w-4/5 max-w-screen content-center animate-pullup">
          <Three />
        </div>
      </div>
    </div>
  );
}
