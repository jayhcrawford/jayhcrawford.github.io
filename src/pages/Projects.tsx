
import { heroFont, opacity_var, tertiaryFont } from '../styles';




const list_of_projects = [
  {
    title: "My Place",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",
    about_txt: "Autodesk Maya and Arnold project."
  },
  {
    title: "Widow Bags",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",
    about_txt: "High visibility, high durability apparel for urban commuters."
  },
  {
    title: "Door Project",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",
    about_txt: "Based on a drawing, built in Blender to emulate the drawing."
  },
  {
    title: "3D Me :-)",
    img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",
    about_txt: "Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."
  },
]



interface Project__Props {
  width: number
}

const Projects = (props: Project__Props) => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <hr />
      {
        list_of_projects.map((project, idx) => {
          return (
            <ReactProject key={idx} title={project.title} about_txt={project.about_txt} img={project.img} width={props.width} />
          )
        })
      }
    </div>
  )
};

export default Projects;

interface ReactProject__Props {
  width: number,
  title: string,
  img: string,
  about_txt: string
}

const ReactProject = (props: ReactProject__Props) => {

  return (
    <>
      <style>
        {`
      hr {
      color: white;
      border-width: 2px;
      opacity: ${opacity_var}%

      }`}
      </style>

      <div className={` text-white m-6 justify-center ${props.width < 750 ? "flex flex-col" : "flex"}`}>

        <div className={` ${props.width < 750 ? "flex flex-col items-center" : "flex w-[70%]"}`}>
          <div className='p-1 m-1'>
            <Project_Image img={props.img} />
          </div>

          <div className={`ml-10 ${props.width < 750 ? "mt-8 w-full pr-20" : "flex flex-col justify-center mb-10"}`}>
            <h4 style={{ fontFamily: heroFont }} className='text-2xl'>{props.title}</h4>
            <p style={{ fontFamily: tertiaryFont }}>{props.about_txt}</p>
          </div>

        </div>
      </div >
      <hr />
    </>
  )
}


interface Project_Image__Props {
  img: string
}


const Project_Image = (props: Project_Image__Props) => {
  return (
    <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='w-80 h-60'>
      <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
    </div>

  )
}