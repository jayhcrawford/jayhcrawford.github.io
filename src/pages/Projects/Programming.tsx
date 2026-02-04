import BlogList, { BlogItem } from "../../components/BlogList";

interface Programming__Props {
  width: number;
  blog_array: BlogItem[];
}

const Programming = (props: Programming__Props) => {
  return <BlogList width={props.width} blog_array={props.blog_array} />;
};

export default Programming;
