
import { tertiaryFont } from '../styles';

interface Project__Props {
  width: number
}

const Projects = (props: Project__Props) => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <h2>Projects</h2>
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
      <div className={`${props.width < 750 ? "flex flex-col" : "flex"}`}>

        <div className='md:w-[30%] md:max-h-[300px]'>
          <img style={{ boxShadow: "5px 5px 5px rgb(35, 31, 31, .5)" }}
            className="rounded-md"
            src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg" />

        </div>
        <div>
          <h4 >"My Place"</h4>
          <p >Autodesk Maya and Arnold project.</p>
        </div>

      </div>

      <hr />
    </>
  )
}