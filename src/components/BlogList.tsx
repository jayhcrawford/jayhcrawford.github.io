
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { heroFont, opacity_var, tertiaryFont } from '../styles';

interface BlogList_Item__Props {
  width: number,
  title: string,
  img: string,
  about_txt: string,
  url?: string;
}

const BlogList_Item = (props: BlogList_Item__Props) => {
  const [hovering, setHovering] = useState(false);


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

      <Link onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)} to={props.url ? props.url : ""}>
        <div className={`${props.url == "" ? "cursor-not-allowed" : "cursor-pointer"} text-white m-6 justify-center ${props.width < 750 ? "flex flex-col" : "flex"}`}>

          <div className={` ${props.width < 750 ? "flex flex-col items-center" : "flex w-[70%]"}`}>
            <div className='p-1 m-1'>





              <div className='relative'>

                <div className=' h-full w-full relative z-100'>
                  {/* {props.url == "" && <div style={{display: hovering ? "absolute" : "none" }} className='p-6  w-full top-[130px] left-[50%] bg-green-500 z-50'>
                      THis wil hover
                    </div> */}

                  <div className={`${props.url == "" && hovering ? "absolute" : "hidden"} w-full text-white font-black absolute bg-red-600 top-[120px] p-4 text-center`}>
                    Under Construction
                  </div>
                  <BlogList_Item_Photo img={props.img} />


                </div>


              </div>
            </div>

            <div className={`ml-10 ${props.width < 750 ? "mt-8 w-full pr-20" : "flex flex-col justify-center mb-10"}`}>
              <h4 style={{ fontFamily: heroFont }} className='text-2xl'>{props.title}</h4>
              <p style={{ fontFamily: tertiaryFont }}>{props.about_txt}</p>
            </div>

          </div>
        </div ></Link>
      <hr />
    </>
  )
}

interface BlogList_Item_Photo__Props {
  img: string;
  under_construction?: boolean;
}

const BlogList_Item_Photo = (props: BlogList_Item_Photo__Props) => {
  return (
    <>
      <div className='h-30 w-30 absolute'>
        <img src="./under_construction.svg" />
      </div>
      <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='w-80 h-60'>
        <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
      </div>
    </>
  )
}

export interface BlogItem {
  title: string;
  img: string;
  about_txt: string;
  url?: string;
  under_construction?: boolean;
}

export interface BlogList__Props {
  width: number,
  blog_array: BlogItem[];
}

const BlogList = (props: BlogList__Props) => {
  return (
    <div style={{ fontFamily: tertiaryFont }}>
      <hr />
      {
        props.blog_array.map((project, idx) => {
          return (
            <BlogList_Item key={idx} url={project.url ? project.url : ""} title={project.title} about_txt={project.about_txt} img={project.img} width={props.width} />
          )
        })
      }
    </div>
  )
};

export default BlogList;

