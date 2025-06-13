import { tertiaryFont } from '../styles';
import Gallery from '../components/Gallery'

const Art = () => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <h2 style={{display: "none"}}>Art</h2>
        <Gallery />
      </div>
  );
};

export default Art;