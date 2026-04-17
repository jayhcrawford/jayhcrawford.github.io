import GalleryPage, { GalleryFrame } from "./GalleryPage";

const intro = [
  "Door Project started as a pencil sketch in my notebook. I brought it into Blender to see how far I could push stylized bevels, tiny hardware details, and painted lighting.",
  "The final piece riffs on illustrated children’s books—heavy outlines, warm gradients, and exaggerated scale.",
];

const frames: GalleryFrame[] = [
  {
    id: "Figure 1",
    caption: "Reference + sketch",
    description: "Scan of the original drawing with callouts for hinge spacing, stain pattern, and atmospheric lighting cues.",
  },
  {
    id: "Figure 2",
    caption: "Blender viewport",
    description: "Modeling pass with grease-pencil notes for trim depth and lantern glass thickness. Geometry stays simple so I can iterate fast.",
  },
  {
    id: "Figure 3",
    caption: "Final render",
    description: "Cycles render with painted fog layers and chromatic bleed composited in Photoshop.",
  },
];

const DoorProjectGallery = () => (
  <GalleryPage title="Door Project" slug="door-project" discipline="Blender · Cycles" intro={intro} frames={frames} />
);

export default DoorProjectGallery;
