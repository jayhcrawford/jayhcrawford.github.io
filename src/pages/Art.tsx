import { tertiaryFont } from '../styles';
import Gallery from '../components/Gallery'

const Art = () => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <h2>Art</h2>
      <div
       style={{border: "1px solid red", padding: "1em", backgroundColor: "blue"}}
       >
        <Gallery />
      </div>
    </div>
  );
};

export default Art;