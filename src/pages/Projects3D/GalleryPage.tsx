import { Blog } from "../../components/Blog/Blog";
import {
  BLOG_ACCENT_TEXT,
  Blog_ButtonCTA,
  Blog_Card,
  Blog_Image,
  Blog_Label,
  Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

export interface GalleryFrame {
  id: string;
  caption: string;
  description: string;
}

export interface GalleryPageProps {
  title: string;
  slug: string;
  discipline: string;
  intro: string[];
  frames: GalleryFrame[];
  ctaHref?: string;
  ctaLabel?: string;
}

const placeholder = (slug: string, id: string) =>
  `https://placehold.co/1400x900/0f172a/ffffff?text=${encodeURIComponent(`${slug.toUpperCase()} — ${id}`)}`;

const GalleryPage = ({
  title,
  slug,
  discipline,
  intro,
  frames,
  ctaHref = "/projects/3d",
  ctaLabel = "Back to 3D projects",
}: GalleryPageProps) => {
  const accent = BLOG_ACCENT_TEXT;

  return (
    <Blog construction={false} title={title}>
      <div className="space-y-10 text-slate-100">
        <Blog_Card tone="glass" className="space-y-4">
          <Blog_Label>{discipline}</Blog_Label>
          {intro.map((paragraph, idx) => (
            <Blog_Paragraph key={`${slug}-intro-${idx}`}>{paragraph}</Blog_Paragraph>
          ))}
          <Blog_ButtonCTA href={ctaHref} label={ctaLabel} newTab={false} />
        </Blog_Card>

        {frames.map((frame) => (
          <Blog_Card key={frame.id} className="space-y-3">
            <Blog_Image
              variant="full"
              src={placeholder(slug, frame.id)}
              alt={frame.caption}
              figureLabel={frame.id}
              figureCaption={frame.caption}
              withMatte
              imgClassName="w-full max-w-6xl mx-auto"
              figcaptionClassName={accent}
            />
            <Blog_Paragraph>{frame.description}</Blog_Paragraph>
          </Blog_Card>
        ))}
      </div>
    </Blog>
  );
};

export default GalleryPage;
