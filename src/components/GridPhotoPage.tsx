import { Link } from 'react-router-dom';
import { heroFont } from '../styles';
import { Category } from '../pages/Projects/Projects';


interface GridPhoto_Image__Props {
  img: string
}

const GridPhoto_Image = (props: GridPhoto_Image__Props) => {
  return (
    <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='gridPhoto_Image_container w-80 h-60'>
      <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
    </div>
  )
}

interface GridPhotoItem__Props {
  title: string,
  img: string,
}




const GridPhotoItem = (props: GridPhotoItem__Props) => {

  return (
    <>
      <Link to="/projects/3d">
        <div className='gridPhoto_container p-1 m-2 flex justify-center' >

          <div className='gridPhoto_item_container m-2 inline'>
            <div className=''>
              <GridPhoto_Image img={props.img} />
            </div>

            <div>
              <h4 style={{ fontFamily: heroFont }} className='text-2xl text-white p-4'>{props.title}</h4>
            </div>

          </div>
        </div ></Link>

    </>
  )
}

interface GridPhotoPage__Props {
  width: number;
  categories: Category[];
}

const GridPhotoPage = (props: GridPhotoPage__Props) => {

  const container_width = () => {
    if (props.width < 2000) {
      return "w-full"
    } else {
      return "w-[60%]"
    }
  }

  const container_cols = () => {
    if (props.width < 750) {
      return (
        "grid-cols-1"
      )
    } else {
      return (
        "grid-cols-2"
      )
    }
  }

  return (
    <div id="grid_container" className={`grid ${container_width()} ${container_cols()}`}>
      {props.categories.map((category, idx) => {
        return (
          <span key={`${idx}-${category.category}`} >
            <GridPhotoItem title={category.category} img={category.img} />
          </span>
        )
      })
      }
    </div>
  )
};


export default GridPhotoPage;