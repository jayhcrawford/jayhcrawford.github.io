import BlogListBonus, { BlogItem } from "../../components/BlogList";

interface D3Visualizations__Props {
  width: number;
  blog_array: BlogItem[];
}

const D3Visualizations = (props: D3Visualizations__Props) => {
  return <BlogListBonus width={props.width} blog_array={props.blog_array} />;
};

export default D3Visualizations;
