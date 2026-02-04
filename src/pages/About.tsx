import { Blog } from "../components/Blog/Blog";
import { Blog_Paragraph } from "../components/Blog/Blog_Pieces";

// TODO: I need a snazzy image of myself and some flourish that makes this page a good introduction to me


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


        <Blog_Paragraph text={`I’m an engineering student based in Los Angeles, originally from Kentucky. I earned my BFA from the School of the Art Institute of Chicago and moved to LA in 2017. Apart from tons of different odd jobs, I've worked mainly in specialty construction, food and beverage, and the entertainment industry in various capacities.`} />

        <Blog_Paragraph text={`Outside of work, I get into fitness and the outdoors. I’m a longtime runner and cyclist, and I train consistently with weights. Learning drives me, and I’ve been creatively inclined for as long as I can remember. Creativity might mean painting, drawing, or to my parent's chagrin, taking things apart and putting them back together—but it may also mean building an app/cli utility, making short films, or a flourishing a garden in my apartment.`} />

        <Blog_Paragraph text={`My enneagram is type 8: the challenger, which I absolutely identify with across multiple domains of my life—I love to take on challenges. My MBTI is ENFP-A. Connecting with people, working together, and pushing limits are how I find joy.`} />
      </Blog>

    </>
  );
};

export default About;







