import { Link } from 'react-router-dom';
import { heroFont } from '../styles';
import { Category } from '../pages/Projects/Projects';
import { useState } from 'react';


interface GridPhoto_Image__Props {
  img: string;
  url?: string;
}

const GridPhoto_Image = (props: GridPhoto_Image__Props) => {
  return (
    <>      
    {props.url == "" && <div id="this_one" className='h-30 w-30 absolute'>
      <img src="./under_construction.svg" />
    </div>}
      <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='gridPhoto_Image_container w-80 h-60'>
        <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
      </div>
    </>
  )
}

interface GridPhotoItem__Props {
  title: string,
  img: string,
  url?: string
}




const GridPhotoItem = (props: GridPhotoItem__Props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link id="" to={props.url ? props.url : ""}>
        <div className='gridPhoto_container p-1 m-2 flex justify-center' >

          <div className={`gridPhoto_item_container m-2 inline ${props.url == "" && "cursor-not-allowed"}`}>
            <style>
              {`
                .gridPhoto_item_container:hover {
                  text-decoration: dotted;
                }
                .gridPhoto_item_container {
                  text-decoration: dotted;
                }
              `}
            </style>

            <div className='relative'>

              <div className=' h-full w-full relative z-100'>
                {/* {props.url == "" && <div style={{display: hovering ? "absolute" : "none" }} className='p-6  w-full top-[130px] left-[50%] bg-green-500 z-50'>
                      THis wil hover
                    </div> */}

                <div className={`${props.url == "" && hovering ? "absolute" : "hidden"} w-full absolute text-white font-black bg-red-600 top-[120px] p-4 text-center`}>
                  Under Construction
                </div>
              <GridPhoto_Image img={props.img} url={props.url} />


              </div>


            </div>




            <div>
              <h4 style={{ fontFamily: heroFont }} className='text-2xl text-white p-4 abt_gridPhotoItem'>{props.title}</h4>
            </div>

          </div>
        </div ></Link>

    </div>
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
            <GridPhotoItem title={category.category} img={category.img} url={category.url ? category.url : ""} />
          </span>
        )
      })
      }
    </div>
  )
};


export default GridPhotoPage;