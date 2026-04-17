import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "I modeled this tripod in Fusion 360 for my first engineering drawing course. The assignment focused on parametric design and generating manufacturing drawings that someone else could actually build from.",
  "The piece mixes carbon tubes with machined aluminum joints, so tolerances mattered. Fusion’s timeline workflow made it easy to tweak dimensions without rebuilding everything.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Exploded view",
    description: "Shows how the center column, hinges, and locking cams nest together. Each part is color-coded for the final drawing set.",
  },
  {
    id: "Figure 2",
    caption: "Tech drawing",
    description: "Orthographic sheet with key dimensions, tolerances, and material callouts per the class spec.",
  },
  {
    id: "Figure 3",
    caption: "Render study",
    description: "Quick Fusion render to communicate finishes—powder-coated hubs, raw aluminum knuckles, and rubber feet.",
  },
];

const Fusion360TripodGallery = () => (
  <GalleryPage title="Fusion 360 Tripod" slug="fusion360-tripod" discipline="Fusion 360" intro={intro} frames={frames} />
);

export default Fusion360TripodGallery;
