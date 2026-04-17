import BlogList, { BlogItem } from "../../components/BlogList";

interface Projects3D__Props {
    width: number;
    blog_array: (BlogItem & { slug?: string })[];
}

const Projects3D = (props: Projects3D__Props) => {
    return (
        <BlogList width={props.width} blog_array={props.blog_array} />
    )
}

export default Projects3D;
