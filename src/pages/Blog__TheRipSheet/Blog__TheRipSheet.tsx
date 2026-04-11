
import { Blog, } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_ButtonCTA,
    Blog_Card,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

// TODO: This page needs a literary structural edit

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
];

const Blog__TheRipSheet = () => {
    const accentText = BLOG_ACCENT_TEXT;

    return (
        <Blog construction={true} title="The Rip Sheet">
            <div className="space-y-12 text-slate-100">
                <Blog_Card tone="glass" className="space-y-6 text-center">
                    <Blog_Label>RIP Sheet case study</Blog_Label>
                    <Blog_HeroQuote quote="In 2018, I decided to learn weightlifting." />
                    <Blog_HeroQuote
                        quote="Since then, I’ve been developing tools and systems to become stronger and to consistently learn."
                        sizePreset="compact"
                    />
                    <Blog_Paragraph text="RIP Sheet is the discipline system I built to hold myself accountable. The name is both a reminder of mortality and a nod to getting ripped—it asks me to make the change this rep, today." />
                    <div className="flex justify-center">
                        <Blog_Image
                            variant="quarter"
                            src={ripSheetImageUrls[4]}
                            alt="Early RIP Sheet layout"
                            figureLabel="Figure 1"
                            figureCaption="The original analog worksheet that kicked off the system."
                            figcaptionClassName={accentText}
                        />
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Analog beginnings</Blog_Label>
                    <Blog_Paragraph text="The first iterations lived on paper: printed sheets, stretching packets, and pencils tucked into my gym bag. It forced focus, but loose pages disintegrated quickly and archiving progress was tedious." />
                    <Blog_Paragraph text="Still, those pages taught me the cadence of a session—warmup, compound lifts, accessory work, reflections. I kept iterating until the layout captured the way I wanted to train." />
                    <div className="flex justify-center">
                        <Blog_Image
                            variant="half"
                            src={ripSheetImageUrls[7]}
                            alt="Workbook phase"
                            figureLabel="Figure 2"
                            figureCaption="Prototype workbook carried to the gym every day."
                            figcaptionClassName={accentText}
                        />
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">From paper to data</Blog_Label>
                    <Blog_Paragraph text="Eventually Google Sheets took over. Every rep since 2022 lives in structured rows—exercise, weight, reps, tempo, notes. That consistency made it trivial to run analyses later when a Linear Algebra for Data Science class asked for a real data set." />
                    <Blog_Paragraph text="Processing pipelines bounced between JavaScript and C++ before settling on Python notebooks. Each workout now stores as JSON and syncs into visual dashboards the same day." />
                    <div className="flex justify-center">
                        <Blog_ButtonCTA
                            href="https://colab.research.google.com/drive/1ENZlQbCl78q4ilT7lTgQ9YkcPgvTLV9d?usp=sharing"
                            label="View the Python analysis in Google Colab"
                        />
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <Blog_Image
                            variant="half"
                            src={ripSheetImageUrls[6]}
                            alt="Data storage"
                            figureLabel="Figure 3"
                            figureCaption="Clean schema made comparisons effortless."
                            figcaptionClassName={accentText}
                        />
                        <Blog_Image
                            variant="half"
                            src={ripSheetImageUrls[5]}
                            alt="Google Sheet view"
                            figureLabel="Figure 4"
                            figureCaption="The sheet that keeps every rep honest."
                            figcaptionClassName={accentText}
                        />
                        <Blog_Image
                            variant="half"
                            src={ripSheetImageUrls[0]}
                            alt="Workout history"
                            figureLabel="Figure 5"
                            figureCaption="Condensed history of every workout logged."
                            figcaptionClassName={accentText}
                        />
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Insights + regression overlays</Blog_Label>
                    <Blog_Paragraph text="Visuals expose my habits instantly—what’s strong, what’s falling off, and where volume spikes. When I fit least-squares regressions to each lift, I could literally see plateaus forming." />
                    <div className="space-y-6">
                        <Blog_Image
                            variant="centered"
                            src={ripSheetImageUrls[1]}
                            alt="Data board"
                            figureLabel="Figure 6"
                            figureCaption="Dashboard I use weekly to stay calibrated."
                            figcaptionClassName={accentText}
                        />
                        <div className="grid gap-6 md:grid-cols-2">
                            <Blog_Image
                                variant="centered"
                                src={ripSheetImageUrls[2]}
                                alt="Regression analysis"
                                figureLabel="Figure 7"
                                figureCaption="Least-squares fit on pull exercises."
                                figcaptionClassName={accentText}
                            />
                            <Blog_Image
                                variant="centered"
                                src={ripSheetImageUrls[3]}
                                alt="Volume chart"
                                figureLabel="Figure 8"
                                figureCaption="Volume mix that totally outs my arm obsession."
                                figcaptionClassName={accentText}
                            />
                        </div>
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">What’s next</Blog_Label>
                    <Blog_Paragraph text="My hope is to package RIP Sheet into a product that helps people adopt sustainable training. Healthy routines should feel approachable—clear visual feedback, honest numbers, and proof that small reps compound." />
                    <div className={accentText}>
                        <Blog_HeroQuote quote="I believe I can help people adopt a habit they love." sizePreset="balanced" />
                    </div>
                </Blog_Card>
            </div>
        </Blog>
    );
}

export default Blog__TheRipSheet;
