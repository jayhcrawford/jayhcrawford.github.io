

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
        
        <p>I’m a painter and engineering student based in Los Angeles. I grew up in Kentucky and earned my BFA from the School of the Art Institute of Chicago before moving to LA in 2017.</p>

        <p>My paintings explore the tension between image and object—where flatness meets surface, color misbehaves, and drawing techniques clash. I’m drawn to that moment when something feels just slightly off, when a painting holds its ground but refuses to settle.</p>

        <p>Alongside my art practice, my studies as an engineering student have a focus on product design, app interfaces, and data analysis. I’m interested in how systems break down and reassemble—whether in a canvas or a codebase. My work moves between those worlds, and they feed each other in unexpected ways.</p>

      </div>
    </>
  );
};

export default About;


