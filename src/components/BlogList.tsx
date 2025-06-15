
import { Link } from 'react-router-dom';
import { heroFont, opacity_var, tertiaryFont } from '../styles';

interface BlogList_Item__Props {
  width: number,
  title: string,
  img: string,
  about_txt: string
}

const BlogList_Item = (props: BlogList_Item__Props) => {

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

      <Link to="/projects/gridphotopage">
        <div className={` text-white m-6 justify-center ${props.width < 750 ? "flex flex-col" : "flex"}`}>

          <div className={` ${props.width < 750 ? "flex flex-col items-center" : "flex w-[70%]"}`}>
            <div className='p-1 m-1'>
              <BlogList_Item_Photo img={props.img} />
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
  img: string
}

const BlogList_Item_Photo = (props: BlogList_Item_Photo__Props) => {
  return (
    <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)" }} className='w-80 h-60'>
      <img className='rounded-lg w-80 h-60' style={{ objectFit: "cover" }} src={props.img}></img>
    </div>
  )
}

export interface BlogItem {
  title: string;
  img: string;
  about_txt: string;
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
            <BlogList_Item key={idx} title={project.title} about_txt={project.about_txt} img={project.img} width={props.width} />
          )
        })
      }
    </div>
  )
};

export default BlogList;

