import { Blog } from "../../components/Blog/Blog";
import {
  BLOG_ACCENT_TEXT,
  Blog_ButtonCTA,
  Blog_Card,
  Blog_Image,
  Blog_Label,
  Blog_Paragraph,
} from "../../components/Blog/Blog_Pieces";

const gallery = [
  {
    id: "Figure 1",
    caption: "Orthographic overview of the loft layout",
    description:
      "Wide shot showing the main seating platform, cantilevered desk, and layered shelving. The palette leans on matte charcoal finishes and hidden LED channels.",
  },
  {
    id: "Figure 2",
    caption: "Material block + lighting passes",
    description:
      "Arnold test render with roughness maps dialed in on the microcement walls plus warm bounce lighting from the perimeter cove.",
  },
  {
    id: "Figure 3",
    caption: "Hero angle",
    description:
      "Final render featuring the custom chaise, wall sculpture, and the 15-foot sliding glass panel that opens to a private balcony.",
  },
];

const placeholder = (id: string) =>
  `https://placehold.co/1200x800/0f172a/ffffff?text=${encodeURIComponent(id + ' — My Place')}`;

const MyPlace = () => {
  const accentText = BLOG_ACCENT_TEXT;

  return (
    <Blog construction={false} title="My Place">
      <div className="space-y-10 text-slate-100">
        <Blog_Card tone="glass" className="space-y-4">
          <Blog_Label>Autodesk Maya + Arnold</Blog_Label>
          <Blog_Paragraph>
            <strong>My Place</strong> is a calm, overstim-proof loft visualization. Modeled in Maya, textured with Substance assets, and
            rendered with Arnold on my local workstation. The brief: design a space that feels like a quiet escape after
            high-energy shoots and events.
          </Blog_Paragraph>
          <Blog_ButtonCTA href="/projects/3d" label="Back to 3D projects" newTab={false} />
        </Blog_Card>

        {gallery.map((frame) => (
          <Blog_Card key={frame.id} className="space-y-3">
            <Blog_Image
              variant="full"
              src={placeholder(frame.id)}
              alt={frame.caption}
              figureLabel={frame.id}
              figureCaption={frame.caption}
              withMatte
              imgClassName="w-full max-w-6xl mx-auto"
              figcaptionClassName={accentText}
            />
            <Blog_Paragraph>{frame.description}</Blog_Paragraph>
          </Blog_Card>
        ))}
      </div>
    </Blog>
  );
};

export default MyPlace;
