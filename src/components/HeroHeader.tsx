import { Link } from "react-router-dom"
import { artist_name, hero_fontStyle, heroFont, secondaryFont, tertiaryFont } from "../styles"
import NavDivider from "./NavDivider"
import SocialBrick from "./SocialBrick"



interface HeroHeader__Props {
  width: number;
  path: string;
}

const HeroHeader = (props: HeroHeader__Props) => {
    const this_year = new Date().getFullYear();


  console.log(props)

  if (props.path == "/") {
    return (<>
      <nav className="z-10 w-full">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex justify-center sm:text-lg md:text-5xl ${hero_fontStyle}`}>
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
                <p style={{ fontFamily: tertiaryFont }} className={`text-center pb-4 ${hero_fontStyle} text-3xl`}>Los Angeles, CA</p>


        <SocialBrick />

        <p className={`${hero_fontStyle} text-5xl text-center`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>





      </header></>
    )
  } else {
    return (<>
      <nav className="z-10 w-full">
        <ul style={{ fontFamily: secondaryFont }} className={`list-none p-0 m-0 flex sm:text-lg md:text-5xl ${hero_fontStyle}`}>
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


        <p className={`${hero_fontStyle} text-3xl text-left`} style={{ fontFamily: secondaryFont }}>
          Interdisciplinary Creative & Programmer
        </p>

      </header>
    </>
    )
  }
}
export default HeroHeader