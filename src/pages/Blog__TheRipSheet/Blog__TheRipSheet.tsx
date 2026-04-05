import { Blog, } from "../../components/Blog/Blog"
import { Blog_HeroQuote, Blog_Image, Blog_Paragraph } from "../../components/Blog/Blog_Pieces"

const ripSheetImageUrls = [
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ALL_WORKOUTS.png",
    "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD.png",
"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_BOARD_REGRESSION.png",
"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_DATA_CHART.png",
"https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/rip_sheet_python_images/RIP_ORIGIN_SHEET.png"

]

// TODO: Change alt text


const Blog__TheRipSheet = () => {
    const string = "flex align-center justify-center";

    return (
        <div>
            <Blog construction={true} title="The Rip Sheet">
                <Blog_Paragraph text="In 2020, I decided that I wanted to learn how to weightlift. Over the past five years, through various iterations, I've developed a system that I call the RIP sheet. The first iterations did not work for developing habits at all, but I worked really hard on them. The name is a double entendre—a memento mori that calls us to get 'ripped'. Today is the day you make that life change—this very rep." />
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
                    <Blog_Image variant="quarter" src={ripSheetImageUrls[4]} alt="RIP sheet analysis chart 1" />
                </div>
                <div className={`${string}`}>
                    <Blog_Image variant="quarter" src={ripSheetImageUrls[0]} alt="RIP sheet analysis chart 1" />
                </div>
                <Blog_HeroQuote quote="Today is the day you make that life change—this very rep" />
                <div className={`${string}`}>
                    <Blog_Image variant="centered" src={ripSheetImageUrls[1]} alt="RIP sheet analysis chart 1" />
                </div>
                <Blog_Paragraph text="After a few years of iterating, I landed on a simple, spreadsheet-based system. It's allowed me to track every rep that I've made since 2022." />
                <div className={`${string}`}>
                    <Blog_Image variant="centered" src={ripSheetImageUrls[2]} alt="RIP sheet analysis chart 1" />
                </div>
                <Blog_Paragraph text="Recently, I took a linear algebra for data analysis course, and used Python to create least square regression analyses of each one of my exercises over the past 2.5 years. Seeing a visualization was highly motivational and validating for my stronger routines, but it also showed me clearly where I've been slacking recently." />
                <div className={`${string}`}>
                    <Blog_Image variant="centered" src={ripSheetImageUrls[3]} alt="RIP sheet analysis chart 1" />
                </div>
                <Blog_Paragraph text="My hope is to create a fitness app that allows people to develop realistic and healthy physical fitness routines and give useful visualizations that will let users know for sure how to generate real physical progress. The gym habit can be challenging to adopt, and I want to help people to realize that learning that habit is counter-intuitive to initial first impressions. By dispelling the myth that you have to work really hard to get gains, I believe I can help people to adopt a habit that they love." />

                <Blog_HeroQuote quote="I believe I can help people to adopt a habit that they love"/>
            </Blog>
        </div>
    )
}

export default Blog__TheRipSheet
