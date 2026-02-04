import BlogList, { BlogItem } from "../../components/BlogList";

interface WebDev__Props {
  width: number;
  blog_array: BlogItem[];
}

const WebDev = (props: WebDev__Props) => {
  return <BlogList width={props.width} blog_array={props.blog_array} />;
};

export default WebDev;
