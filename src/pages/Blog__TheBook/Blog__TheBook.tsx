import { Blog } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_ButtonCTA,
    Blog_Card,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

const placeholderImages = [
    "https://placehold.co/800x500/fef9c3/0f172a?text=Scan+from+The+Book",
    "https://placehold.co/800x500/fee2e2/0f172a?text=Idea+Index",
];

const Blog__TheBook = () => {
    const accentText = BLOG_ACCENT_TEXT;

    return (
        <Blog construction={true} title="The Book">
            <div className="space-y-10 text-slate-100">
                <Blog_Card tone="glass" className="space-y-6 text-center">
                    <Blog_Label>Portable inspiration vault</Blog_Label>
                    <Blog_HeroQuote quote="The Book is my lifelong mixtape of great ideas, routines, and reminders." sizePreset="balanced" />
                    <Blog_Paragraph>I started The Book in high school as a place to copy Sun Tzu quotes, Pixar storytelling beats, and notes about the artists and inventors I admired. Decades later it has evolved into a structured vault with prompts, reading lists, and rituals I revisit whenever I need to reset.</Blog_Paragraph>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">What lives inside</Blog_Label>
                    <Blog_Paragraph>Sections include daily/weekly checklists, journaling prompts, creative warmups, biographies, and mental models. I pull from Charles Darwin's productivity ledger, Pixar's 22 storytelling rules, and my own running notes on art school critiques.</Blog_Paragraph>
                    <div className="grid gap-6 md:grid-cols-2">
                        {placeholderImages.map((src, index) => (
                            <Blog_Image
                                key={src}
                                variant="full"
                                src={src}
                                alt={`The Book placeholder ${index + 1}`}
                                figureLabel={index === 0 ? "Scan" : "Index"}
                                figureCaption={index === 0 ? "Handwritten spread of quotes + prompts" : "Tag structure for quick searching"}
                                withMatte
                                imgClassName="mx-auto w-full max-w-md aspect-video object-cover"
                                figcaptionClassName={accentText}
                            />
                        ))}
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">From notebook to app</Blog_Label>
                    <Blog_Paragraph>Once UrFriends finishes its AWS migration, The Book will become a simple mobile companion. Think of it as a playful creative brief generator: shake a prompt, review the routine, and capture what worked.</Blog_Paragraph>
                    <div className="flex justify-center">
                        <Blog_ButtonCTA href="/projects/urfriends" label="Follow the UrFriends build" newTab={false} />
                    </div>
                </Blog_Card>
            </div>
        </Blog>
    );
};

export default Blog__TheBook;
