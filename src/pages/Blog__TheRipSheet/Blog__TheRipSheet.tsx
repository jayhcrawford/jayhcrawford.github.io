import { Blog } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_ButtonCTA,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

/**
 * Long-form case study detailing the RIP Sheet fitness-tracking system.
 * Uses the shared <Blog> layout plus Blog_* subcomponents to keep typography,
 * figure callouts, and hero quotes consistent with the rest of the writing section.
 */
const ripSheetImageUrls = [
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_G_SHEET.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_RAW_JSON.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_FILE.jpg",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_AP_TIME.png"
];

const Blog__TheRipSheet = () => {
    const accentText = BLOG_ACCENT_TEXT;
    const borderBase = "border border-dashed border-white/20 p-5 rounded-2xl";

    return (
        <Blog construction={false} title="The Rip Sheet">
            <div className="space-y-8 text-slate-100">
                {/* Hero & framing */}
                <section className="rip-section rip-section--intro">
                    <Blog_Label>RIP Sheet case study</Blog_Label>
                    <div className={`relative flex items-center justify-center rounded-2xl ${borderBase} bg-slate-800/40 p-6 text-center`}>
                        <div>
                            <p className={`text-sm uppercase tracking-[0.3em] ${accentText}`}>
                                Portrait Placeholder
                            </p>
                            
                        </div>
                    </div>
                    <Blog_HeroQuote quote="In 2018, I decided to learn weightlifting." />
                    <div className={accentText}>
                        <Blog_HeroQuote
                            quote="Since then, I’ve been developing tools and systems to become stronger and to consistently learn."
                            sizePreset="compact"
                        />
                    </div>
                    <Blog_Paragraph text="In 2018, I set out to learn weightlifting. Over time, through repeated iteration, I built a system I call the RIP Sheet. Early versions failed to track progress and enforce consistency — but I kept refining, testing, and improving. The name is a double entendre: a memento mori and a call to get ripped. Today is the day you make that change — this very rep." />
                    <div className="rip-figure rip-figure--single">
                        <Blog_Image
                            variant="quarter"
                            src={ripSheetImageUrls[4]}
                            alt="Origin version of the RIP sheet layout"
                            figureLabel="Figure 1"
                            figureCaption="Early (circa 2018) RIP sheet worksheet."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                    </div>
                </section>

                {/* Analog prototyping */}
                <section className={`rip-section rip-section--analog ${borderBase}`}>
                    <Blog_Label align="left">Analog beginnings</Blog_Label>
                    <Blog_Paragraph text="At first, there were multiple different supporting checklists based upon what I wanted to achieve in the gym any given 'day' — a 'back day' for example. I found that to be overly restrictive and not in line with life's unpredictability. I thought to put it together into a single document, one worksheet, and came up with a sassy name: the RIP Sheet. Getting 'stronger' has resonated with me all of my life, for me that's what weightlifting is about, and I need to do it while I'm still breathing! The worksheet was a structured attempt to bring discipline into the gym without relying on screens. The layout was clear, but the medium wasn’t. Tracking progress across loose pages quickly became impractical, and paper doesn’t hold up well in a gym environment where gains are a factor." />
                    <Blog_Paragraph text="Alongside the sheet, I created a small reference packet for stretching and brought both with me to train." />
                    <div className="rip-figure rip-figure--single">
                        <Blog_Image
                            variant="half"
                            src={ripSheetImageUrls[7]}
                            alt="Original workbook used for tracking workouts in the initial prototyping phase"
                            figureLabel="Figure 2"
                            figureCaption="The workbook taken to the gym in the initial prototyping phase."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                    </div>
                    <Blog_Paragraph text="This workbook was the version I brought with me to the gym during early prototyping — an attempt to turn structure into habit. I found keeping track of the physical worksheets and transferring them into a digital format was very inconvenient." />
                </section>

                {/* Digital system */}
                <section className={`rip-section rip-section--digital ${borderBase}`}>
                    <Blog_Label align="left">From paper to data</Blog_Label>
                    <Blog_Paragraph text="Eventually, I moved to Google Sheets, which made tracking progress far more efficient and reliable, allowing me to easily track every rep I've made since 2022. Because I had already been collecting this data, I was able to analyze it later in a Linear Algebra for Data Science course in 2025." />
                    <Blog_Paragraph text="In that class, I used Python to create least square regression analyses of each one of my exercises a period of 2.5 years. Seeing visualizations was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently. That was kind of like a bell ringing in the distance — effective visualizations can powerfully reinforce habits" />
                    <Blog_Paragraph text="Processing the raw data was complicated at first, and I tailored it using JavaScript and C++. Over time, I simplified the system: each set is stored as JSON, defined by exercise name, weight, reps, and date. This structure makes generating visualizations straightforward, with same-day workouts naturally aligning in the data." />
                    <div className="rip-cta">
                        <p className={`rip-cta__label ${accentText}`}>Explore the notebooks + regression overlays</p>
                        <Blog_ButtonCTA
                            href="https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing"
                            label="View the Python analysis in Google Colab"
                        />
                    </div>
                    <div className="rip-gallery rip-gallery--grid">
                        <Blog_Image
                            variant="full"
                            src={ripSheetImageUrls[6]}
                            alt="Origin version of the RIP sheet layout"
                            figureLabel="Figure 3"
                            figureCaption="The data is stored in a way that makes it easy to analyze."
                            withMatte
                            imgClassName="mx-auto w-full max-w-sm aspect-square object-cover"
                            figcaptionClassName={accentText}
                        />
                        <Blog_Image
                            variant="full"
                            src={ripSheetImageUrls[5]}
                            alt="Origin version of the RIP sheet layout"
                            figureLabel="Figure 4"
                            figureCaption="Although it looks basic, this is the system I've found supports consistency."
                            withMatte
                            imgClassName="mx-auto w-full max-w-sm aspect-square object-cover"
                            figcaptionClassName={accentText}
                        />
                        <Blog_Image
                            variant="full"
                            src={ripSheetImageUrls[0]}
                            alt="Collection of all workouts tracked in the RIP sheet"
                            figureLabel="Figure 5"
                            figureCaption="Consolidated workout history view."
                            withMatte
                            imgClassName="mx-auto w-full max-w-sm aspect-square object-cover"
                            figcaptionClassName={accentText}
                        />
                    </div>
                </section>

                {/* Insights */}
                <section className={`rip-section rip-section--insights ${borderBase}`}>
                     <Blog_Label align="left">Insights</Blog_Label>
                        <Blog_Paragraph text="The very first thing that I wanted to see was the data related to every workout, all in one place. Being able to visualize the data seemed like it could be powerful, and it was. The first time the Python spit out this image my jaw dropped. This is a tool that can help make that life change." />
  
                    <div className="rip-figure rip-figure--wide">
                        <Blog_Image
                            variant="centered"
                            src={ripSheetImageUrls[1]}
                            alt="RIP sheet data board showing tracked exercise metrics"
                            figureLabel="Figure 6"
                            figureCaption="Data board used to monitor progress over time."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                    </div>
                    <div className={accentText}>
                        <Blog_HeroQuote quote="Today is the day you make that life change — this very rep." sizePreset="balanced" />
                    </div>
                    <Blog_Paragraph text="Visualizations expose my habits instantly — what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift and saw their slopes, I knew I'd found a powerful way to encourage progress." />

                    <div className="rip-gallery rip-gallery--dual">
                        <Blog_Image
                            variant="centered"
                            src={ripSheetImageUrls[8]}
                            alt="Regression analysis chart generated from RIP sheet data"
                            figureLabel="Figure 7"
                            figureCaption="Visualization of intuitively finding an ideal weight (40lb) for Arnold press over time."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                        <Blog_Image
                            variant="centered"
                            src={ripSheetImageUrls[3]}
                            alt="Progress chart visualizing workout performance changes"
                            figureLabel="Figure 8"
                            figureCaption="Bar chart showing exercise type counts for the data captured."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                    </div>
                    <Blog_Paragraph text="The Arnold press visualization shows my workout routine ramping up from 20lb to 50lb, and settling on 40lb for that exercise. To me, it helps to see the progress and the pattern; knowing what to do next to improve is useful, and so is seeing how far I've come." />
                    <div className={accentText}>
                        <Blog_HeroQuote quote="Fitting a least-squares regression to the data shows interesting trends:" sizePreset="compact" />
                    </div>
                    <div className="rip-figure rip-figure--wide">
                        <Blog_Image
                            variant="centered"
                            src={ripSheetImageUrls[2]}
                            alt="RIP sheet data board showing tracked exercise metrics"
                            figureLabel="Figure 6"
                            figureCaption="Least-squares regression snapshot for exercise trends."
                            withMatte
                            figcaptionClassName={accentText}
                        />
                    </div>
                    <Blog_Paragraph text="I know that there are many more methods and styles of visualizations that can facilitate positive change, help people to understand their progress, be inspired, and make informed decisions." />
                </section>

                {/* Future */}
                <section className={`rip-section rip-section--future ${borderBase}`}>
                    <Blog_Label align="left">What’s next</Blog_Label>
                    <Blog_Paragraph text="My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people realize that learning that habit is counter-intuitive to first impressions." />
                    <Blog_Paragraph text="A major aspect of my routine has been settling on a system that is sustainable, repeatable, and useful. Google Sheets might be a tool that supports the system as it stands, but there is a way to streamline the fitness tracking." />
                    <div className={accentText}>
                        <Blog_HeroQuote quote="I believe I can help people to adopt a habit that they love." sizePreset="balanced" />
                    </div>
                </section>
            </div>
        </Blog>
    );
}

export default Blog__TheRipSheet;
