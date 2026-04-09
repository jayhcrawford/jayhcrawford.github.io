import { secondaryFont, tertiaryFont } from "../../styles";

/**
 * Responsive figure wrapper used by blog pages to keep
 * captions + sizing variants consistent.
 */
type BlogImageProps = {
    src: string;
    alt: string;
    variant?: "full" | "half" | "centered" | "quarter";
    figureLabel?: string;
    figureCaption?: string;
    imgClassName?: string;
    figureMarginClassName?: string;
};

// Renders an image + optional figure text with layout variants.
export const Blog_Image: React.FC<BlogImageProps> = ({
    src,
    alt,
    variant = "full",
    figureLabel,
    figureCaption,
    imgClassName,
    figureMarginClassName = "my-8",
}) => {
    const hasFigureText = Boolean(figureLabel || figureCaption);

    const variants = {
        // Mobile-first widths so images expand to full width, then clamp down on larger breakpoints
        full: "w-full max-w-4xl",
        half: "mx-auto w-full sm:w-3/4 lg:w-1/2",
        centered: "mx-auto w-full sm:w-3/4 lg:w-2/3",
        quarter: "mx-auto w-full sm:w-1/2 lg:w-1/4",
    };

    return (
        <figure className={`flex flex-col justify-center ${figureMarginClassName}`}>
            <a href={src} target="_blank" rel="noopener noreferrer">
                <img
                    src={src}
                    alt={alt}
                    className={`${variants[variant]} ${imgClassName ?? ""}`.trim()}
                />
            </a>
            {hasFigureText && (
                <figcaption className="mt-2 text-center text-sm text-gray-300">
                    {figureLabel && <span className="font-semibold">{figureLabel}</span>}
                    {figureCaption && <span className={figureLabel ? "ml-2" : ""}>{figureCaption}</span>}
                </figcaption>
            )}
        </figure>
    );
};

interface Blog_LinkElement__Props {
    url: string,
    linkText: string,
}

// Simple centered link treatment for call-to-action moments inside posts.
export const Blog_LinkElement = (props: Blog_LinkElement__Props) => {
    return (
        <div className=" flex justify-center">
            <a className=" text-xl font-semibold underline text-center" target="_blank" href={props.url}>{props.linkText}</a>
            <div style={{ width: "90px" }}>
                <svg style={{ filter: "invert(100%)", transform: "rotate(-10deg), translateX(-20px)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224 104C224 81.9 241.9 64 264 64C286.1 64 304 81.9 304 104L304 252.2C312.5 244.6 323.7 240 336 240C356.6 240 374.2 253 381 271.2C389.8 261.9 402.2 256 416 256C441.3 256 462 275.5 463.9 300.3C472.4 292.6 483.7 288 496 288C522.5 288 544 309.5 544 336L544 448C544 518.7 486.7 576 416 576L330.7 576C325.7 576 320.8 575.7 316 575C260.7 569.4 209.8 541 176 496L104 400C90.7 382.3 94.3 357.3 112 344C129.7 330.7 154.7 334.3 168 352L224 426.7L224 104zM336 368C336 359.2 328.8 352 320 352C311.2 352 304 359.2 304 368L304 464C304 472.8 311.2 480 320 480C328.8 480 336 472.8 336 464L336 368zM384 352C375.2 352 368 359.2 368 368L368 464C368 472.8 375.2 480 384 480C392.8 480 400 472.8 400 464L400 368C400 359.2 392.8 352 384 352zM464 368C464 359.2 456.8 352 448 352C439.2 352 432 359.2 432 368L432 464C432 472.8 439.2 480 448 480C456.8 480 464 472.8 464 464L464 368z" /></svg>
            </div>
        </div>
    )
}

interface Blog_Paragraph__Props {
    text: string;
}

// Standardized paragraph block so typography stays consistent across posts.
export const Blog_Paragraph = (props: Blog_Paragraph__Props) => {
    return (
        <section id="blog_standardParagraph" className="mt-0" style={{ fontFamily: tertiaryFont }}>
            {/* sm:text-center kicks in at 640px so phones stay left-aligned while tablets/desktops keep the centered look */}
            <p className="pb-5 text-lg leading-8 text-slate-100/90 max-w-3xl mx-auto sm:text-center">
                {props.text}
            </p>
        </section>
    )
}

interface Blog_HeroVideo__Props {
    url: string;
}

// Responsive 16:9 iframe wrapper for embedding hero videos in blog posts.
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

// Large typographic pull-quote component used to break up long-form narratives.
export const Blog_HeroQuote = (props: Blog_HeroQuote__Props) => {

    return (
        {/* Responsive sizing so quotes don't overflow on phones but still feel bold on desktop */}
        <section id="Blog_heroQuote" className="text-3xl sm:text-5xl lg:text-6xl font-light text-center p-6 sm:p-8 pb-10 sm:pb-14 leading-tight" style={{ fontFamily: secondaryFont }}>
            <style>{`
                        #Blog_heroQuoteQuoter::before {
                            content: "- "; /* or content: "&copy;"; */
                        }
                `}</style>
            <p>{props.quote}
                {props.quoter ? <span id="Blog_heroQuoteQuoter" className={`block text-center pt-4 ml-${props.quoter_padding}`}>
                    {props.quoter}
                </span> : null}
            </p>
        </section>)
}
