import Header from "@/app/header";
import Image from "next/image";
import HeaderButton from "@/app/headerbutton";

function Attachment({details}){
    const video = details.Video;
    const image = details.Image;
    return(
        <div className="h-[40vh] ">
            {(image === undefined) ? 
                <iframe 
                    className="h-full w-auto m-auto"
                    src={video}/> :
                <Image 
                    className="h-full w-auto m-auto"
                    src={image} 
                    fill
                    priority={true}
                    quality={100}
                    placeholder="empty"/>
            }
        </div>
    )
}

function Technology ({tech}){
    return (
        <h1 className="text-superhighlight bg-hightlight/40 px-4 py-1  rounded-2xl text-xs2 xl:text-xs">
            {tech}
        </h1>
    )
}

export default async function Page({params}){
    // Get the title of the doc
    const {slug} = await params;
    const pageName = slug.replaceAll("%20" , " ");

    const data = await fetch (`https://5lghnqwcha.execute-api.us-east-1.amazonaws.com/experiencedetail?experience=${slug}`,{
        method:'GET',
        next: {
                    revalidate: parseInt(process.env.REVALIDATE),
        },
    })
        .then((res) => {return res.json();})
        .then((data) => {return data.body[pageName];})
        .catch((err) => {return {};});

    const image = data.Image;
    const link = data.Link
    const startDate = data.StartDate;
    const endDate = data.EndDate;
    const description = data.Description2;
    const tags = data.Tags;
    const attachments = data.ExtraAttachments;
    
    return(
        <div className="bg-background1 min-h-screen relative flex flex-row">
            <Header />
            <HeaderButton />
            <div id="ExperienceDetails"
                className="w-4/5 lg:w-1/2 mx-auto mb-auto mt-5 space-y-6 flex flex-col animate-pullup">
                {/*Main image */}
                <div className="h-[33vh] w-full content-center relative ">
                    {(image === undefined) ? null : 
                    <Image className="m-auto rounded-2xl w-full h-auto lg:h-full lg:w-auto"
                            alt="Image of work"
                            width={1000} height={1000}
                            src={image}
                            priority={true}
                            quality={100}
                            placeholder="empty"/>
                    }
                </div>
                {/* Link to company*/}
                <a className=" flex flex-row h-14 w-1/2 space-x-2 group cursor-pointer" 
                    href={(link === undefined) ? null : link}
                    target="_blank">
                    <h1 className="text-primary font-bold text-xl h-full content-center my-auto">
                        {pageName}
                    </h1>
                    {(link === undefined) ? null :
                        <div className="relative h-1/3 aspect-square my-auto
                            group-hover:animate-bounceright transition-transform duration-500 ease-in-out content-center">
                            <Image className="my-auto h-full w-auto hidden dark:block  "
                                alt="Arrow To Company"
                                src="/DarkMode/RightArrow.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                            <Image className="my-auto h-full w-auto  dark:hidden"
                                alt="Arrow To Company"
                                src="/LightMode/RightArrow.webp"
                                width={0} height={0}
                                quality={100}
                                unoptimized/>
                        </div>
                    }
                </a>
                {/* Added on details*/}
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        DATE
                    </h1>
                    <h1 className="text-base text-primary">
                        {startDate} {(endDate === undefined) ? "": "-"} {endDate}
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
                {/* Technology tags*/}
                <div>
                    <h1 className="text-primary font-bold text-lg">
                        TECHNOLOGIES
                    </h1>
                    <div className="flex flex-row space-x-2 flex-wrap gap-1">
                        {(tags === undefined) ? null : tags.map((entry, index) => {
                            return(
                                <Technology key={`Tag${index.toString()}`}
                                    tech={entry}/>
                            )
                        })}
                    </div>
                </div>
                {/* Check if there are any more attachments*/}
                {(attachments === undefined) ? null : 
                    <div className="flex flex-col gap-2">
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
            </div>
        </div>
    )
}
