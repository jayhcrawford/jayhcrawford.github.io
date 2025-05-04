import useWindowSize from "../hooks/useWindowSize";
import { coming_soon_message, tertiaryFont } from "../styles";

const About = () => {
  const { width } = useWindowSize();
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <p>{coming_soon_message}</p>

      <p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: width > 500 ? "20vw" : "25vw" }}>
            <a href="https://www.linkedin.com/in/jay-crawford-prod/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
              <img src="./LinkedIn_Logo.svg"></img></a>
          </div>
        </div>
      </p>
    </div>
  );
};

export default About;