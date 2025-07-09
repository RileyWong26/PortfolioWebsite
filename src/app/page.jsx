import Image from "next/image";
import Header from "@/app/header";
import Head from "next/head";
import Three from "./three";

export default async function Home() {

  return (
    <div className = "bg-background1 w-screen h-screen font-Anonymous transition-colors duration-1000 ease-in-out flex flex-row space-x-2">
      <Header />
      <div className="w-full flex flex-row justify-evenly">
        <div className="w-4/5 content-center animate-pullup ">
            <h1 className="m-auto text-primary w-1/2 leading-15 font-bold text-3xl animate-glitchtext ">
              Hi <br /> 
              I'm Riley <br/> 
              Software Engineer
            </h1>
            <h1 className="ml-auto text-text2 w-3/4 text-lg ">
              Computer science, 2029, Western University
            </h1>
        </div>
        <div className="w-4/5 content-center">
          <Three />
        </div>
      </div>
    </div>
  );
}
