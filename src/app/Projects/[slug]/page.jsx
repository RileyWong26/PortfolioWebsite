import Header from "@/app/header";
import Image from "next/image";
import HeaderButton from "@/app/headerbutton";
import BackButton from "@/app/BackButton";

function Attachment({details}){
    const video = details.Video;
    const image = details.Image;
    return(
        <div className="min-h-[40vh] w-full content-center ">
            {(image === undefined) ? 
                <iframe 
                    className="h-auto w-full lg:h-full lg:w-auto aspect-video m-auto"
                    src={video}/> 
                    :
                <Image 
                    className="h-auto w-full lg:h-full lg:w-auto m-auto"
                    src={image} 
                    width={1000} height={1000}
                    priority={true}
                    quality={100}
                    placeholder="empty"/>
            }
        </div>
    )
}

function Technology ({tech}){
    return (
        <h1 className="text-superhighlight2 bg-hightlight/40 px-4 py-1 rounded-2xl font-bold text-xs tracking-widest">
            {tech}
        </h1>
    )
}

export default async function Page({params}){
    // Get the title of the doc
    const {slug} = await params;
    const pageName = slug.replaceAll("%20", " ");

    // Fetch data from server
    const projectData = await fetch (`https://5lghnqwcha.execute-api.us-east-1.amazonaws.com/projectdetail?project=${slug}`, {
        method: 'GET',
        next: {
            revalidate: parseInt(process.env.REVALIDATE),
        }
    })
        .then((res) => {return res.json()})
        .then((data) => {return data.body[pageName]})
        .catch((err) => {console.log(err)});

    
    const image = projectData.Image.trimEnd();
    const link = projectData.Link;
    const startDate = projectData.StartDate;
    const endDate = projectData.EndDate;
    const tags = projectData.Tags;
    const description = projectData.Description2;
    const attachments = projectData.ExtraAttachments;

    return(
        <div className="bg-background1 min-h-screen relative flex flex-row">
            <Header />
            <HeaderButton />
            <div id="ProjectDetails"
                className="w-4/5 lg:w-1/2 mx-auto mb-12 mt-12 space-y-6 flex flex-col animate-pullup ">
                <div className="min-h-[33vh] w-full content-center h-full">
                    {(image === undefined) ? null : 
                    <Image className="m-auto rounded-2xl h-auto w-full lg:h-full lg:w-auto"
                        alt="Image of work"
                        src={image}
                        width={1000} height={1000}
                        priority={true}
                        quality={100}
                        placeholder="empty"/>
                }
                </div>
                <a className=" flex flex-row h-14 w-full space-x-2 group cursor-pointer" 
                    href={(link === undefined) ? null : link}
                    target="_blank">
                    <h1 className="text-primary font-bold text-xl h-full content-center ">
                        {pageName}
                    </h1>
                    {(link === undefined) ? null :
                        <div className="relative h-1/2 aspect-square my-auto 
                            transition-transform duration-500 ease-in-out group-hover:animate-bounceright translate-0 ">
                            <Image className="h-full w-auto hidden dark:block" 
                                alt="Arrow To Company"
                                src="/DarkMode/GitHubDark.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                            <Image className="h-full w-auto dark:hidden"
                                alt="Arrow To Company"
                                src="/LightMode/GitHubLight.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                        </div>
                    }
                </a>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        DATE
                    </h1>
                    <h1 className="text-primary text-base">
                        {startDate} {(endDate != undefined) ? "-": ""} {endDate}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        DESCRIPTION
                    </h1>
                    <h1 className="text-base text-primary whitespace-pre-line">
                        {description}
                    </h1>
                </div>
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        TECHNOLOGIES
                    </h1>
                    <div className="flex flex-row space-x-2 flex-wrap gap-1">
                        {(tags === undefined) ? null : 
                            tags.map((entry, index) => {
                                return(
                                    <Technology key={`Tag${index.toString()}`}
                                        tech={entry}/>
                                )
                            })}
                    </div>
                </div>
                {(attachments === undefined) ? null : 
                    <div className="flex flex-col gap-2 h-full">
                        <h1 className="text-primary font-bold text-lg">
                            ATTACHMENTS
                        </h1> 
                        {attachments.map((item, index) => {
                            return <Attachment 
                                details={item} 
                                key={`Attachment${index}`}
                                />
                        })}
                    </div>
                }
                {/* back button */}
                <div className="pb-5">
                        <BackButton link={"/Projects"}/>
                </div>
            </div>
        </div>
    )
}
