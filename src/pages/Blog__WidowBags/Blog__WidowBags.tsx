import { Blog } from "../../components/Blog/Blog";
import {
    BLOG_ACCENT_TEXT,
    Blog_Card,
    Blog_HeroQuote,
    Blog_Image,
    Blog_Label,
    Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

const moodboardImages = [
    "https://placehold.co/800x500/1e293b/ffffff?text=Widow+Bags+Moodboard",
    "https://placehold.co/800x500/111827/ffffff?text=Prototype+Sketch",
];

const Blog__WidowBags = () => {
    const accentText = BLOG_ACCENT_TEXT;

    return (
        <Blog construction={true} title="Widow Bags">
            <div className="space-y-10 text-slate-100">
                <Blog_Card tone="glass" className="space-y-6 text-center">
                    <Blog_Label>Concept studio</Blog_Label>
                    <Blog_HeroQuote quote="Widow Bags is a sculptural apparel line born at SAIC." sizePreset="balanced" />
                    <Blog_Paragraph>The concept mixes high-energy nightlife silhouettes with utilitarian construction details. Think matte black textiles, exaggerated hardware, and pockets that feel architectural.</Blog_Paragraph>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Design roots</Blog_Label>
                    <Blog_Paragraph>The earliest prototypes came out of School of the Art Institute of Chicago studios. I blended patternmaking assignments with personal experiments—laser-cut vinyl overlays, powder-coated buckles, and partnered stitching with metal fabrication classmates.</Blog_Paragraph>
                    <div className="grid gap-6 md:grid-cols-2">
                        {moodboardImages.map((src, index) => (
                            <Blog_Image
                                key={src}
                                variant="full"
                                src={src}
                                alt={`Widow Bags placeholder ${index + 1}`}
                                figureLabel={index === 0 ? "Moodboard" : "Sketch"}
                                figureCaption={index === 0 ? "Material + color palette" : "Front elevation of the flag-ship bag"}
                                withMatte
                                imgClassName="mx-auto w-full max-w-md aspect-video object-cover"
                                figcaptionClassName={accentText}
                            />
                        ))}
                    </div>
                </Blog_Card>

                <Blog_Card className="space-y-6">
                    <Blog_Label align="left">Next steps</Blog_Label>
                    <Blog_Paragraph>I’m sourcing eco-friendly hardware suppliers, finalizing CAD patterns, and documenting the fabrication process so the line can launch with a small-batch drop. More renderings and fabrication photos coming soon.</Blog_Paragraph>
                </Blog_Card>
            </div>
        </Blog>
    );
};

export default Blog__WidowBags;
