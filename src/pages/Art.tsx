import { tertiaryFont } from '../styles';
import Gallery from '../components/Gallery'

interface Art__Props {
  width: number;
}

const Art = (props: Art__Props) => {
  return (
    <div className='text-white' style={{ fontFamily: tertiaryFont, textAlign: "center" }}>
      <h2 style={{display: "none"}}>Art</h2>
        <Gallery width={props.width} />
      </div>
  );
};

export default Art;