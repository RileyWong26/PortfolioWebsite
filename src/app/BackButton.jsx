import Image from "next/image";
import Link from "next/link";
export default function BackButton({link}){

    return (
        <Link className="w-[90px] bg-background2 rounded-[100px]  z-3 flex flex-row p-1 space-x-2"
            href={link}>
            <Image 
                className="w-1/6 h-auto hidden dark:block my-auto ml-auto -rotate-90 " 
                width={100} height={100}
                src="/DarkMode/Back.webp"
                alt={"Back Image"}/>
            <Image 
                className="block w-1/6 h-auto dark:hidden my-auto ml-auto -rotate-90 "
                width={100} height={100}
                src="/LightMode/Back.webp"
                alt={"Back Image"}/>
            <p className="mr-auto text-primary">
                BACK
            </p>
        </Link>
    );
}