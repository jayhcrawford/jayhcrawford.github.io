import { Link } from "react-router-dom"
import { artist_name, hero_fontStyle, heroFont, secondaryFont, tertiaryFont } from "../styles"

import SocialBrick from "./SocialBrick"


function capitalizeEveryWord(str: string) {
  if (!str) {
    return "";
  }
  return str
    .toLowerCase()
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const NavDivider = () => {
  return (
    <span className={`${hero_fontStyle} ml-5 mr-5`}>|</span>
  )
}



interface NavListElem__Props {
  name: string
}

const NavListElem = (props: NavListElem__Props) => {
  return (
    <li className={`${hero_fontStyle} hover:underline hover:opacity-100`}><Link to={`${props.name}`}>
      {capitalizeEveryWord(props.name)}
    </Link></li>
  )
}


interface HeroHeader__Props {
  width: number;
  path: string;
}

const HeroHeader = (props: HeroHeader__Props) => {

  if (props.path == "/") {
    return (<>
      <nav className="z-10 w-ful">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 pb-4 m-0 flex justify-center text-xl sm:text-3xl md:text-5xl`}>
          <NavListElem name="about" />
          <NavDivider />
          <NavListElem name="art" />
          <NavDivider />
          <NavListElem name="projects" />
          <NavDivider />
          <NavListElem name="contact" />
        </ul>
      </nav>
      <header style={{ marginBottom: '70px' }}>

        <h1 className="text-center text-white" style={{ fontFamily: heroFont, fontSize: props.width < 500 ? "3rem" : '6rem', fontWeight: 'bold' }}>{artist_name}</h1>
        <p className={`${hero_fontStyle} text-5xl text-center`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>
        <p style={{ fontFamily: tertiaryFont }} className={`text-center p-4 ${hero_fontStyle} text-3xl`}>Los Angeles, CA</p>
        <SocialBrick />

      </header></>
    )
  } else {
    return (<>
      <nav className="z-10 w-full mb-5">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex sm:text-2xl md:text-5xl`}>
          <NavListElem name="about" />
          <NavDivider />
          <NavListElem name="art" />
          <NavDivider />
          <NavListElem name="projects" />
          <NavDivider />
          <NavListElem name="contact" />
        </ul>
      </nav>
      <header style={{ marginBottom: '70px' }}>

        <Link to="/">
          <h1 className="text-white" style={{ fontFamily: heroFont, fontSize: props.width < 500 ? "1rem" : '2rem', fontWeight: 'bold' }}>{artist_name}</h1>
        </Link>

        <p className={`${hero_fontStyle} text-3xl text-left`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>

      </header>
    </>
    )
  }
}
export default HeroHeader



