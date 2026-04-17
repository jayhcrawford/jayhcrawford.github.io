import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "This Japanese lantern was a team project in my second engineering drawing course. We collaborated in Solidworks, passing the file back and forth while keeping features organized and named like adults.",
  "The design mixes wood joinery with frosted acrylic panels, so we leaned on Solidworks’ assembly mates to make sure the puzzle actually fit together.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Assembly overview",
    description: "Exploded view showing the support ribs, shoji-inspired panels, and LED puck mount.",
  },
  {
    id: "Figure 2",
    caption: "Joinery detail",
    description: "Close-up of the interlocking corner detail we prototyped on the laser cutter before committing to the final stock.",
  },
  {
    id: "Figure 3",
    caption: "Lighting test",
    description: "Keyshot render with translucent panels and a warm LED source to mimic the real-world build.",
  },
];

const SolidworksJapaneseLanternGallery = () => (
  <GalleryPage
    title="Solidworks Japanese Lantern"
    slug="solidworks-japanese-lantern"
    discipline="Solidworks · Keyshot"
    intro={intro}
    frames={frames}
  />
);

export default SolidworksJapaneseLanternGallery;
