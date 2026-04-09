import { Blog, } from "../../components/Blog/Blog"
import { Blog_HeroQuote, Blog_Image, Blog_Paragraph } from "../../components/Blog/Blog_Pieces"

const ripSheetImageUrls = [
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png",
]

// TODO: Change alt text


const Blog__TheRipSheet = () => {
    const string = "flex align-center justify-center";

    return (
        <div>
            <Blog construction={true} title="The Rip Sheet">
                <Blog_HeroQuote quote='In 2018, I decided that I wanted to learn how to weightlift.' /> 
                <Blog_HeroQuote quote="Since then, I've been developing tools and systems." />        
                <Blog_Paragraph text="In 2018, I decided that I wanted to learn how to weightlift. Since then, through various iterations, I've developed a system that I call the RIP sheet. The first iterations did not work for tracking and facilitating consistency, but I stuck with them, and developed and tested them. The name is a double entendre—a memento mori that simultaneously calls us to get 'ripped'. Today is the day you make that life change—this very rep." />
                {/* <div className="flex flex-col gap-8 my-8">
                    {ripSheetImageUrls.map((imgUrl, idx) => (
                        <img
                            key={imgUrl}
                            src={imgUrl}
                            alt={`RIP sheet analysis chart ${idx + 1}`}
                            className="w-full rounded-lg"
                            style={{ maxWidth: "500px" }}
                        />
                    ))}
                </div> */}
                <div className={`${string}`}>
                    <Blog_Image
                        variant="quarter"
                        src={ripSheetImageUrls[4]}
                        alt="Origin version of the RIP sheet layout"
                        figureLabel="Figure 1"
                        figureCaption="Early RIP sheet concept and structure."
                        imgClassName="w-32 md:w-40"
                    />
                    
                </div>


                    <Blog_Paragraph text="Initially the system that I used took the form of a physical worksheet. I thought that disconnecting from electronics at the gym and concentrating on a physical object might prove to be especially productive. This was the first iteration, and I've since discovered that tracking the progress 'written down' across multiple pieces of paper can become difficult, and paper gets sweaty at the gym." />
                    <Blog_Paragraph text="This sheet had a supporting packet of information, related to stretching, and I took it to the gym." />
                    <Blog_Paragraph text="Eventually, I started working with Google Sheets, because it allowed me to track my progress more efficiently." />
                    <Blog_Paragraph text="Because of this choice to track the data, when I took a Linear Algebra for Data Science with Python/R in 2025, I was able to do an interesting analysis of my workout data because I already had it. This windfall produced visualizations that I thought were very interesting and potentially powerful for helping people to visualize their progress. Some of the resulting graphics are shown below, and there is a link to the Colab where I prompted for the relevant Python. For actually processing the data, because it was somewhat amorphous initially, I used JavaScript and C++ at different times. Ultimately I settled on storing the processed data in a certain way in order to make creating the visualizations as low effort as is necessary. That format is simple JSON, storing each SET of a workout based upon name, weight, rep count, and date. Workouts that happen on the same day happen to correlate on the visualizations incidentally." />
                                    <div className="flex justify-center my-8">
                    <a
                        href="https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-6 py-3 text-sm font-semibold tracking-wide text-cyan-200 transition hover:bg-cyan-400/20 hover:text-cyan-100"
                    >
                        View The Python Analysis In Google Colab
                    </a>
                </div>
                
                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[6]}
                        alt="Origin version of the RIP sheet layout"
                        figureLabel="Figure 2"
                        figureCaption="The data is stored in a way that makes it easy to analyze."
                        imgClassName="w-32 md:w-40"
                    />
                    
                </div>
                
                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[5]}
                        alt="Origin version of the RIP sheet layout"
                        figureLabel="Figure 3"
                        figureCaption="Although it looks basic, this is the system I've found supports consistency."
                        imgClassName="w-32 md:w-40"
                    />
                    
                </div>

                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[0]}
                        alt="Collection of all workouts tracked in the RIP sheet"
                        figureLabel="Figure 4"
                        figureCaption="Consolidated workout history view."
                    />
                </div>
                <Blog_HeroQuote quote='"Today is the day you make that life change—this very rep."' />
                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[1]}
                        alt="RIP sheet data board showing tracked exercise metrics"
                        figureLabel="Figure 5"
                        figureCaption="Data board used to monitor progress over time."
                    />
                </div>
                <Blog_Paragraph text="After a few years of iterating, I landed on a simple, spreadsheet-based system. It's allowed me to track every rep that I've made since 2022." />
                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[2]}
                        alt="Regression analysis chart generated from RIP sheet data"
                        figureLabel="Figure 6"
                        figureCaption="Least-squares regression snapshot for exercise trends."
                    />
                </div>
                <Blog_Paragraph text="Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years. Seeing a visualization was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently." />

                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[3]}
                        alt="Progress chart visualizing workout performance changes"
                        figureLabel="Figure 7"
                        figureCaption="Trend visualization for recent performance changes."
                    />
                </div>
                <Blog_Paragraph text="My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people to realize that learning that habit is counter-intuitive to initial first impressions. By dispelling the myth that you have to work really hard to get gains, I believe I can help people to adopt a habit that they love." />



                <Blog_HeroQuote quote='"I believe I can help people to adopt a habit that they love."'/>
            </Blog>
        </div>
    )
}

export default Blog__TheRipSheet
