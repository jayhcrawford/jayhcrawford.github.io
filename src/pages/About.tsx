import { Blog } from "../components/Blog/Blog";
import { Blog_Paragraph } from "../components/Blog/Blog_Pieces";


const About = () => {
  return (
    <>
      <style>
        {`
          #about_me_txt p:not(:first-child) {
            margin-top: 1em;
          }

          #about_me_txt p {
          text-indent: 30px;
          }
        `}
      </style>
      <Blog title="About" construction={false}>


        <Blog_Paragraph text={`I’m an artist and engineering student based in Los Angeles. I grew up in Kentucky and earned my BFA from the School of the Art Institute of Chicago before moving to LA in 2017. In moving to LA, my goal was to study alongside great acting teachers and I did that twice weekly, for four years. (Performance and emotion other fascinations of mine) `}/>

        <Blog_Paragraph text={`My paintings explore the tension between painting as image and painting as object, where flatness meets surface. Something about the line in between object and image draws me into experimenting with what I consider to be "wrong-ness" in the work. I’m drawn to that moment when something feels just slightly off, when a move on a painting initially strikes me with revolting inadequacy—I'll often stop there.`}/>

        <Blog_Paragraph text={`Alongside my art practice, my studies as an engineering student have a focus on product design, app interfaces, and data analysis. I’m interested in how systems break down and reassemble—whether in a canvas or a codebase. My work moves between those worlds, and they feed each other in unexpected ways.`}/>

        <Blog_Paragraph text={`As an artist, I like breaking things. As an engineer, creating things.`}/>

      </Blog>

    </>
  );
};

export default About;


