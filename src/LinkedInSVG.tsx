import { tertiaryFont } from "./styles"

interface LinkedInSVG__Props {
  width: number
}

const LinkedInSVG = (props: LinkedInSVG__Props) => {

  return (

    <div style={{ fontFamily: tertiaryFont, display: "flex", justifyContent: "center" }}>
      <div>
        <img className=" w-30" style={{ marginLeft: '10px' }} src="./LinkedIn_Logo.svg"></img>
      </div>
    </div>

  )
}

export default LinkedInSVG