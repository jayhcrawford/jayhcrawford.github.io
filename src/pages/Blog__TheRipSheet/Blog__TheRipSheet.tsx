import { Blog, } from "../../components/Blog/Blog";
import { Blog_HeroQuote, Blog_Image, Blog_Paragraph } from "../../components/Blog/Blog_Pieces";

/**
 * Long-form case study detailing the RIP Sheet fitness-tracking system.
 * Uses the shared <Blog> layout plus Blog_* subcomponents to keep typography,
 * figure callouts, and hero quotes consistent with the rest of the writing section.
 */
// Centralized list of hosted assets so Blog_Image instances stay declarative.
const ripSheetImageUrls = [
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg"
]

// TODO: Change alt text

// Page component consumed by the router in src/App.tsx.
const Blog__TheRipSheet = () => {
    // Utility class string reused on the figure wrappers to keep spacing uniform.
    const string = "flex align-center justify-center";

    return (
        <div>
            <Blog construction={true} title="The Rip Sheet">
                <Blog_HeroQuote quote='In 2018, I decided to learn weightlifting.' />
                <Blog_HeroQuote quote="Since then, I’ve been developing tools and systems to stay consistent." />
                <Blog_Paragraph text="In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency—but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change—this very rep." />
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

                <Blog_Paragraph text="The first version of the RIP Sheet was a physical worksheet—a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment." />
                <Blog_Paragraph text="Alongside the sheet, I created a small reference packet for stretching and brought both with me to train." />

                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[7]}
                        alt="Original workbook used for tracking workouts in the initial prototyping phase"
                        figureLabel="Figure 2"
                        figureCaption="The workbook taken to the gym in the initial prototyping phase."
                        imgClassName="w-32 md:w-40"
                    />

                </div>

                <Blog_Paragraph text="This workbook was the version I brought with me to the gym during early prototyping—an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient." />
                <Blog_Paragraph text="Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable allowing me to track every rep I've made since 2022." />
                <Blog_Paragraph text="Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025. That work produced visualizations that made progress—both strong and weak—immediately visible." />
                <Blog_Paragraph text="Early on, processing the data was inconsistent, and I experimented with both JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data." />
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
                        figureLabel="Figure 3"
                        figureCaption="The data is stored in a way that makes it easy to analyze."
                        imgClassName="w-32 md:w-40"
                    />

                </div>

                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[5]}
                        alt="Origin version of the RIP sheet layout"
                        figureLabel="Figure 4"
                        figureCaption="Although it looks basic, this is the system I've found supports consistency."
                        imgClassName="w-32 md:w-40"
                    />

                </div>

                <div className={`${string}`}>
                    <Blog_Image
                        variant="half"
                        src={ripSheetImageUrls[0]}
                        alt="Collection of all workouts tracked in the RIP sheet"
                        figureLabel="Figure 5"
                        figureCaption="Consolidated workout history view."
                    />
                </div>
                <Blog_HeroQuote quote='Today is the day you make that life change—this very rep.' />
                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[1]}
                        alt="RIP sheet data board showing tracked exercise metrics"
                        figureLabel="Figure 6"
                        figureCaption="Data board used to monitor progress over time."
                    />
                </div>
                <Blog_HeroQuote quote="Fitting a linear regression to the data shows interesting trends." />
                <Blog_Paragraph text="You can see the linear regression on the data sets that could be fit, and it shows trends which illuminate my habits." />
                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[2]}
                        alt="Regression analysis chart generated from RIP sheet data"
                        figureLabel="Figure 7"
                        figureCaption="Least-squares regression snapshot for exercise trends."
                    />
                </div>
                <Blog_Paragraph text="Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years. Seeing a visualization was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently." />
                <Blog_HeroQuote quote='You can see below that I am trying to make my arms bigger 🤣😅' />
                <div className={`${string}`}>
                    <Blog_Image
                        variant="centered"
                        src={ripSheetImageUrls[3]}
                        alt="Progress chart visualizing workout performance changes"
                        figureLabel="Figure 8"
                        figureCaption="Bar chart showing exercise type counts for the data captured."
                    />
                </div>
                <Blog_Paragraph text="My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people to realize that learning that habit is counter-intuitive to initial first impressions. By dispelling the myth that you have to work really hard to get gains, I believe I can help people to adopt a habit that they love." />



                <Blog_HeroQuote quote='I believe I can help people to adopt a habit that they love.' />
            </Blog>
        </div>
    )
}

export default Blog__TheRipSheet
