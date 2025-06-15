import GridPhotoPage from "../../components/GridPhotoPage"

export interface Category {
  category: string;
  img: string;
}

interface Projects__Props {
  width: number;
  category_array: Category[]
}

const Projects = (props: Projects__Props) => {
  return (
    <GridPhotoPage width={props.width} categories={props.category_array} />
  )
}

export default Projects;