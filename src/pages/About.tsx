

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
      <div id="about_me_txt" className="w-[80%] ml-10 mb-10 text-white">
        
        <p>I’m an artist and engineering student based in Los Angeles. I grew up in Kentucky and earned my BFA from the School of the Art Institute of Chicago before moving to LA in 2017. My goal was to study alongside great acting teachers and I did that twice weekly, for four years. (Performance and emotion are <span style={{fontStyle: "italic"}}>other</span> fascinations of mine) </p>

        <p>My paintings explore the tension between painting as image and painting as object, where flatness meets surface. Something about the line in between object and image draws me into experimenting with what I consider to be "wrong-ness" in the work. I’m drawn to that moment when something feels just slightly off, when a move on a painting initially strikes me with revolting inadequacy––I'll often stop there.</p>

        <p>Alongside my art practice, my studies as an engineering student have a focus on product design, app interfaces, and data analysis. I’m interested in how systems break down and reassemble—whether in a canvas or a codebase. My work moves between those worlds, and they feed each other in unexpected ways.</p>

        <p>As an artist, I like breaking things. As an engineer, creating things.</p>
      </div>
    </>
  );
};

export default About;


