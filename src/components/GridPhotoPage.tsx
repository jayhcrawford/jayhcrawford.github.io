import { Link } from 'react-router-dom';
import {  heroFont, tertiaryFont } from '../styles';


interface GridPhoto_Image__Props {
  img: string
}

const GridPhoto_Image = (props: GridPhoto_Image__Props) => {
  return (
    <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='bg-red-500 w-80 h-60'>
      <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
    </div>
  )
}

interface GridPhotoItem__Props {
  title: string,
  img: string,
  about_txt: string
}

const GridPhotoItem = (props: GridPhotoItem__Props) => {

  return (
    <>
      <Link to="/projects/3d">
      <div className='bg-green-500 p-1 m-2 flex justify-center' >

        <div className='bg-red-200 m-2 inline'>
          <div className=''>
            <GridPhoto_Image img={props.img} />
          </div>

          <div>
            <h4  style={{ fontFamily: heroFont }} className='text-2xl'>{"My Greatest Item"}</h4>
            <p className='' style={{ fontFamily: tertiaryFont }}>{"This is a great item"}</p>
          </div>

        </div>
      </div ></Link>

    </>
  )
}

interface GridPhotoPage__Props {
  width: number
}

const GridPhotoPage = (props: GridPhotoPage__Props) => {
  console.log(props)
  return (
    <div id="grid_container" className='grid w-full grid-cols-2'>
      <style>
        {`
          #grid_container {
            background: blue;
          }

          #grid_container p {
            background-color: red;
            color: green;
          }
        `}
      </style>

      <GridPhotoItem title="" about_txt="" img={""}/>
      <GridPhotoItem title="" about_txt="" img={""}/>
      <GridPhotoItem title="" about_txt="" img={""}/>
      <GridPhotoItem title="" about_txt="" img={""}/>

    </div>
  )
};


export default GridPhotoPage;