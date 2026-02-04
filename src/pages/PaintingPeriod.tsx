import { useParams } from "react-router-dom";
import Gallery from "../components/Gallery";
import { heroFont, tertiaryFont } from "../styles";
import { painting_periods_by_slug } from "./Projects/Painting_periods_data";

interface PaintingPeriod__Props {
  width: number;
}

const PaintingPeriod = (props: PaintingPeriod__Props) => {
  const { periodSlug } = useParams();
  const period = periodSlug ? painting_periods_by_slug[periodSlug] : undefined;

  if (!period) {
    return (
      <div className="text-white px-6 py-20" style={{ fontFamily: tertiaryFont }}>
        <h1 style={{ fontFamily: heroFont }} className="text-3xl font-semibold">
          Painting period not found
        </h1>
        <p className="mt-4 opacity-80">Check back soon for more updates.</p>
      </div>
    );
  }

  return (
    <div className="text-white px-6 py-20" style={{ fontFamily: tertiaryFont }}>
      <h1 style={{ fontFamily: heroFont }} className="text-4xl md:text-5xl font-bold mb-6">
        {period.title} Paintings
      </h1>
      <Gallery
        width={props.width}
        images={period.images}
        detail_medium="acrylic on canvas"
        detail_years={period.year_label}
      />
    </div>
  );
};

export default PaintingPeriod;
