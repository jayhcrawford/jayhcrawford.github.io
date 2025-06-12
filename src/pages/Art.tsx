import { coming_soon_message, tertiaryFont } from '../styles';
import Gallery from '../components/Gallery.tsx'

const Art = () => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <h2>Art</h2>
      <p>{coming_soon_message}</p>
      <Gallery />
    </div>
  );
};

export default Art;