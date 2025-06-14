import { coming_soon_message, tertiaryFont } from '../styles';

const Projects = () => {
  return (
    <div className="text-center" style={{ fontFamily: tertiaryFont }}>
      <h2>Projects</h2>
      <hr />

      <ReactProject />
      <ReactProject />
      <ReactProject />

    </div>
  )
};


export default Projects;


const ReactProject = () => {
  return (
    <>
      <style>
        {`
    .blog-image-tab {
        border-radius: 5px;
        box-shadow: 5px 5px 5px rgb(35, 31, 31, .5);
        margin: 0rem 1.5rem 1.5rem 2rem;
    }

    @media only screen and (min-width: 601px) {
        .image-block {
            display: flex;
        }

        .image-block div .blog-post-title { 
            padding: 1rem;
        }


        .blog-image-tab {
            width: 14rem;
            border-radius: 5px;
        }

        .blog-description {
            padding: 0;
            margin-left: 1rem;
            margin-right: 2rem;
        }

        h1 {
            padding: 1rem 0rem 0rem 1rem;
        }

    @media only screen and (max-width: 600px) {
        .image-block {
            display: block;
        }
        
        .blog-image-tab {
            display: block;
            width: 80%;
            margin-right: auto;
            margin-left: auto;
        }
        
        .blog-post-title {
            padding-left: 1rem;

        }

        .blog-description {
            padding: 0;
            margin-left: 1rem;
            margin-right: 2rem;
        }

        .blog-image-tab {
            border-radius: 5px;
            box-shadow: 5px 5px 5px rgb(35, 31, 31, .5);
            margin: 0rem 1.5rem 1.5rem 2rem;
        }

        .blog-post-title {
            margin-left: 10px;
            display: inline-block;
            text-decoration: underline;
            font-size: 1.5rem;

        }
    }
`}
      </style>
      <div className="p-2 flex flex-row">
        <div className='bg-red-500 inline-block' ><img className="blog-image-tab" src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg" /></div>

        <div><h1 className="blog-post-title bg-blue-300">"My Place"</h1>
          <p className="blog-description bg-green-600">Autodesk Maya and Arnold project.</p></div>
      </div>
      <hr /></>
  )
}