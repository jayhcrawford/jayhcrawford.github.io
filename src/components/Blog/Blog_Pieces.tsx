import { secondaryFont, tertiaryFont } from "../../styles";

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
    quoter_padding?: number;
    quoter?: string;
    quote: string;
}

export const Blog_HeroQuote = (props: Blog_HeroQuote__Props) => {

    return (
        <section id="Blog_heroQuote" className="text-6xl font-light text-center p-8 pb-14" style={{ fontFamily: secondaryFont }}>
            <style>{`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}</style>
            <p>{"\"" + props.quote + ".\""}
                {props.quoter ? <span id="Blog_heroQuoteQuoter" className={`block text-center pt-4 ml-${props.quoter_padding}`}>
                    {props.quoter}
                </span> : null}
            </p>
        </section>)
}
