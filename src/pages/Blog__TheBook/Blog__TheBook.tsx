import { Blog } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_Card,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph
} from "../../components/Blog/Blog_Pieces";

const blogImages = [
    {
        src: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/the_book_images/page_snapshot_THE_BOOK.png",
        alt: "The Book page snapshot",
        figureLabel: "Page 1",
        figureCaption: "Initial snapshot of The Book"
    },
    {
        src: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/the_book_images/page_snapshot2_THE_BOOK.png",
        alt: "The Book page snapshot 2",
        figureLabel: "Page 2",
        figureCaption: "Second snapshot of The Book"
    },
];

const Blog__TheBook = () => {
    const accentText = BLOG_ACCENT_TEXT;

    return (
        <Blog construction={true} title="The Book">
            <div className="space-y-10 text-slate-100">
                <Blog_Card tone="glass" className="space-y-6 text-center">
                    <Blog_Label>Portable inspiration vault</Blog_Label>
                    <Blog_HeroQuote quote='After assembling a vault of inspirational material, I named it "The Book".' sizePreset="balanced" />
                    <Blog_Paragraph>I started The Book in high school as a place to centralize ideas that I found motivational, inspiring, meaningful, or worth holding onto in some other way. It has all sorts of insight from Sun Tzu quotes, anthropological information, Pixar storytelling beats, world class reading lists, notes about the artists and inventors I admire, and more. Now it has evolved into a structured vault with prompts, reading lists, and rituals I revisit whenever I need to reset.</Blog_Paragraph>
                    <Blog_Paragraph>The next phase of this project is developing an app that can conveniently inspire and motivate people.</Blog_Paragraph>

                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">What lives inside</Blog_Label>
                    <Blog_Paragraph>Sections include daily/weekly checklists, Latin proverbs, journaling prompts, creative warmups, biographies, and mental models. I pull from Charles Darwin's productivity ledger, the habits of other renowned figures, and observations that I've made about my own productivity.</Blog_Paragraph>
                    <div className="grid gap-6 md:grid-cols-2">
                        {blogImages.map(({ src, alt, figureLabel, figureCaption }) => (
                            <Blog_Image
                                key={src}
                                variant="full"
                                src={src}
                                alt={alt}
                                figureLabel={figureLabel}
                                figureCaption={figureCaption}
                                withMatte
                                imgClassName="mx-auto w-full max-w-md aspect-video object-cover"
                                figcaptionClassName={accentText}
                            />
                        ))}
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">From notebook to app</Blog_Label>
                    <Blog_Paragraph>The Book will become a simple mobile companion. Think of it as a playful creative brief generator: shake a prompt, review the routine, and capture what worked.</Blog_Paragraph>
                    <div className="flex justify-center">
                        {/* <Blog_ButtonCTA href="/projects/urfriends" label="Follow the UrFriends build" newTab={false} /> */}
                    </div>
                </Blog_Card>
            </div>
        </Blog>
    );
};

export default Blog__TheBook;
