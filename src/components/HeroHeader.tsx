import { Link } from "react-router-dom"
import { artist_name, heroFont, secondary_hero_elem_style, secondaryFont } from "../styles"
import NavDivider from "./NavDivider"
import SocialBrick from "./SocialBrick"

interface HeroHeader__Props {
  width: number
}

const HeroHeader = (props: HeroHeader__Props) => {
  return (<>
    <nav className="z-10 w-full">
      <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex justify-center ${secondary_hero_elem_style}`}>
        <li className=''><Link to="/about">About</Link></li>
        <NavDivider />
        <li ><Link to="/projects">Projects</Link></li>
        <NavDivider />
        <li ><Link to="/art">Art</Link></li>
        <NavDivider />
        <li ><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <header style={{ marginBottom: '70px' }}>

      <h1 style={{ fontFamily: heroFont, fontSize: props.width < 500 ? "3rem" : '6rem', fontWeight: 'bold' }}>{artist_name}</h1>

      <SocialBrick />

      <p className={`${secondary_hero_elem_style}`} style={{ fontFamily: secondaryFont }}>
        Interdisciplinary Creative & Programmer
      </p>

    </header></>
  )
}
export default HeroHeader