import GridPhotoPage from "../components/GridPhotoPage";

export interface Category {
  category: string;
  img: string;
  url?: string;
}

interface Art__Props {
  width: number;
  category_array: Category[]
}

const Art = (props: Art__Props) => {
  console.log(props)
  return (<div>
    <GridPhotoPage width={props.width} categories={props.category_array} />
  </div>)
}

export default Art;
