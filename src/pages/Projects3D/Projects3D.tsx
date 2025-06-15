import BlogList, { BlogItem } from "../../components/BlogList";

interface Projects3D__Props {
    width: number;
    blog_array: BlogItem[];
}

const Projects3D = (props: Projects3D__Props) => {
    return (
        <BlogList width={props.width} blog_array={props.blog_array} />
    )
}

export default Projects3D;

const thing =     {
        title: "Widow Bags",
        img: "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/web-icons/Web+Hosted/product-design-icons/widow-icon.jpg",
        about_txt: "High visibility, high durability apparel for urban commuters."
    }
console.log(thing)