import { coming_soon_message, tertiaryFont } from '../styles';

const Projects = () => {
  return (
    <div className="text-center" style={{ fontFamily: tertiaryFont }}>
      <h2>Projects</h2>


      <a href="/index.html" className="text-link"><div><h1>Jay Crawford's Website</h1></div></a>



      <div className="current-page"><h2>3D Projects</h2></div>




      <hr />

      <div className="image-block">


        <div><img className="blog-image-tab" src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg" /></div>

        <div><h1 className="blog-post-title">"My Place"</h1>
          <p className="blog-description">Autodesk Maya and Arnold project.</p></div>



      </div>


      <hr />

      <div className="image-block">


        <div><img className="blog-image-tab" src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg" /></div>

        <div><h1 className="blog-post-title">Door Project</h1>
          <p className="blog-description">Based on a drawing, built in Blender to emulate the drawing.</p></div>



      </div>

      <hr />

      <div className="image-block">


        <div><img className="blog-image-tab" src="https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg" /></div>


        <div><h1 className="blog-post-title">Jay VR Character</h1>
          <p className="blog-description">Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging.</p></div>



      </div>

      <hr />
    </div>
  )
};


export default Projects;