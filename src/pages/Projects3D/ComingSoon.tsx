import { Blog } from "../../components/Blog/Blog";
import { Blog_ButtonCTA, Blog_Card, Blog_Label, Blog_Paragraph } from "../../components/Blog/Blog_Pieces";

interface ComingSoonProps {
  label: string;
}

const ComingSoon = ({ label }: ComingSoonProps) => {
  return (
    <Blog construction={true} title={label}>
      <Blog_Card tone="glass" className="space-y-4 text-center">
        <Blog_Label>Under construction</Blog_Label>
        <Blog_Paragraph>
          This 3D project is in progress. I’m assembling renders, process shots, and making sure the gallery behaves well on
          smaller screens.
        </Blog_Paragraph>
        <Blog_ButtonCTA href="/projects/3d" label="Back to 3D projects" newTab={false} />
      </Blog_Card>
    </Blog>
  );
};

export default ComingSoon;
