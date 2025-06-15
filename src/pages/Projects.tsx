import GridPhotoPage from "../components/GridPhotoPage"

interface Projects__Props {
  width: number;
}

const Projects = (props: Projects__Props) => {
  return (
    <GridPhotoPage width={props.width} />
  )
}

export default Projects;