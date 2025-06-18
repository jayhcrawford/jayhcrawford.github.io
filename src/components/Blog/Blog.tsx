import { JSX } from "react";
import { secondaryFont, tertiaryFont } from "../../styles"

interface Blog__Props {
    children: JSX.Element[];
    title: string;
    construction: boolean;
}

export const Blog = (props: Blog__Props) => {
    return (
        <>
            <div className="text-white m-10" >
                {props.construction == true &&
                    <div className="flex justify-center mb-10">
                        <div className="flex flex-col">
                            <div className='flex justify-center'>
                                <div className="h-40 w-40">
                                    <img src="./under_construction.svg" />
                                </div>
                            </div>
                            <p className="inline-block bg-red-500 rounded-xl text-center font-extrabold text-4xl" >This section is under construction</p>
                        </div>
                    </div>}
                <h1 style={{ fontFamily: secondaryFont }} id="blog_header" className="text-5xl text-white font-extrabold pb-10 ">
                    {props.title}
                </h1>
                <div className="p-5" style={{ backgroundColor: "#0b0f17", borderRadius: "20px" }}>
                    {props.children}
                </div>
            </div >
        </>

    )
}

//     fill: #0e1a34;
//   }

//   .cls-2 {
//     fill: #0b0f17;
//   }

//   .cls-3 {
//     fill: #1e2b5a;
//   }






interface Blog_Paragraph__Props {
    text: string;
}

export const Blog_Paragraph = (props: Blog_Paragraph__Props) => {
    return (
        <section id="blog_standardParagraph" className="mt-0" style={{ fontFamily: tertiaryFont }}>
            <p className="indent-20 pb-5">
                {props.text}
            </p>
        </section>
    )
}

interface Blog_HeroVideo__Props {
    url: string;
}

export const Blog_HeroVideo = (props: Blog_HeroVideo__Props) => {
    return (
        <section id="blog_heroVideo" className="flex justify-center">
            <div id="blog_heroVideo_outerContainer" className="w-[80%]">
                <div id="blog_heroVideo_innerContainer" className="p-5 iframe-container">
                    <style>
                        {`
                            /* Responsive iframe styles */
                            .iframe-container {
                                position: relative;
                                width: 100%;
                                padding-top: 56.25%; /* 16:9 aspect ratio, adjust as needed */
                                overflow: hidden;
                            }

                            .iframe-container iframe {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                border: 0;
                                padding: 2em;
                            }
                        `}
                    </style>
                    <iframe width="560" height="315" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </section>
    )
}


interface Blog_HeroQuote__Props {
    quoter_padding: number;
    quoter: string;
    quote: string;
}

export const Blog_HeroQuote = (props: Blog_HeroQuote__Props) => {

    return (
        <section id="Blog_heroQuote" className="text-6xl font-light text-center" style={{ fontFamily: secondaryFont }}>
            <style>{`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}</style>
            <p>{"\"" + props.quote + ".\""}
                <span id="Blog_heroQuoteQuoter" className={`block text-center pt-4 ml-${props.quoter_padding}`}>
                    {props.quoter}
                </span>
            </p>
        </section>)
}




// <h1 style={{ fontFamily: secondaryFont }} id="blog_header" className="text-5xl text-white font-extrabold pb-10 ">
//     Blog Title
// </h1>


// <Blog_Paragraph text={`
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda at asperiores architecto, voluptate ullam perferendis ab blanditiis deleniti saepe unde ipsa exercitationem culpa nam velit. Adipisci esse assumenda cum?
//     Lorem ipsum dolorLorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda at asperiores architecto, voluptate ullam perferendis ab blanditiis deleniti saepe unde ipsa exercitationem culpa nam velit. Adipisci esse assumenda cum?
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda at asperiores architecto, voluptate ullam perferendis ab blanditiis deleniti saepe unde ipsa exercitationem culpa nam velit. Adipisci esse assumenda cum?
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda at asperiores architecto, voluptate ullam perferendis ab blanditiis deleniti saepe unde ipsa exercitationem culpa nam velit. Adipisci esse assumenda cum?
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur assumenda at asperiores architecto, voluptate ullam perferendis ab blanditiis deleniti saepe unde ipsa exercitationem culpa nam velit. Adipisci esse assumenda cum?`}
// />

// <Blog_HeroVideo url="https://www.youtube.com/embed/kkzjoIebTrw?si=gn7sDX0gZk5v-LeP" />

// <Blog_HeroQuote quoter_padding={10}
//     quote="All is fair at your mom's house"
//     quoter="Jay" />