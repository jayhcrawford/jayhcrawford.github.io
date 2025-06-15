import BlogList from "../components/BlogList";


const list_of_projects = [
    {
        title: "My Place",
        img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/orthographic-icon.jpg",
        about_txt: "Autodesk Maya and Arnold project."
    },
    {
        title: "Door Project",
        img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-door-project-icon.jpg",
        about_txt: "Based on a drawing, built in Blender to emulate the drawing."
    },
    {
        title: "3D Me :-)",
        img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/3d-project-icons/3d-jay-icon.jpg",
        about_txt: "Fully rigged, simple 3D character modeled after me. This helped me to better understand topology, weight-painting, and rigging."
    },
]



interface Projects3D__Props {
    width: number;
    blog_array: string;
}

const Projects3D = (props: Projects3D__Props) => {
    return (
        <BlogList width={props.width} blog_array={list_of_projects} />
    )
}

export default Projects3D;

const thing =     {
        title: "Widow Bags",
        img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",
        about_txt: "High visibility, high durability apparel for urban commuters."
    }
console.log(thing)