
import { heroFont, tertiaryFont } from '../styles';

interface Project__Props {
  width: number
}

const Projects = (props: Project__Props) => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <hr />

      <ReactProject width={props.width} />
      <ReactProject width={props.width} />
      <ReactProject width={props.width} />

    </div>
  )
};

export default Projects;

interface ReactProject__Props {
  width: number
}

const ReactProject = (props: ReactProject__Props) => {

  return (
    <>
      <div style={{fontFamily: heroFont}} className={`m-6 justify-center ${props.width < 750 ? "flex flex-col" : "flex"}`}>

        <div className=''>
          <img style={{ boxShadow: "5px 5px 5px rgb(35, 31, 31, .5)" }}
            className="rounded-md  md:max-h-[300px]"
            src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg" />

        </div>
        <div className={`ml-10 ${props.width < 750 ? "mt-8" : "flex flex-col justify-center mb-10" }`}>
          <h4 className='text-2xl'>"My Place"</h4>
          <p style={{fontFamily: tertiaryFont}}>Autodesk Maya and Arnold project.</p>
        </div>

      </div>

      <hr />
    </>
  )
}