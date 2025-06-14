import { Link } from "react-router-dom"
import { artist_name, heroFont, secondaryFont } from "../styles"
import NavDivider from "./NavDivider"
import SocialBrick from "./SocialBrick"

export const secondary_hero_elem_center_style = "text-[50px] font-bold opacity-50"
export const secondary_her_elem_side_style = "text-[30px] font-bold opacity-50"

interface HeroHeader__Props {
  width: number;
  path: string;
}

const HeroHeader = (props: HeroHeader__Props) => {

  console.log(props)

  if (props.path == "/") {
    return (<>
      <nav className="z-10 w-full">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex justify-center ${secondary_hero_elem_center_style}`}>
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

        <h1 className="text-center" style={{ fontFamily: heroFont, fontSize: props.width < 500 ? "3rem" : '6rem', fontWeight: 'bold' }}>{artist_name}</h1>

        <SocialBrick />

        <p className={`${secondary_hero_elem_center_style} text-center`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>

      </header></>
    )
  } else {
    return (<>
      <nav className="z-10 w-full">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex ${secondary_her_elem_side_style}`}>
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

        <Link to="/">
          <h1 className="" style={{ fontFamily: heroFont, fontSize: props.width < 500 ? "1rem" : '2rem', fontWeight: 'bold' }}>{artist_name}</h1>
        </Link>


        <p className={`${secondary_her_elem_side_style} text-left`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>

      </header>
      </>
    )
  }
}
export default HeroHeader