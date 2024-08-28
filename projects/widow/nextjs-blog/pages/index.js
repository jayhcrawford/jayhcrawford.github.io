import Head from 'next/head';

 
function IndexPage() {
  return (
    <div>
      
      <Head>
        <title>Widow Bags and Apparel</title>
      </Head>

      <style>{
      `* {
        background-color: black;
        color: white;
        font-family: arial;
      }
      #header-logo {
        border: 1px dotted white;
        display: inline-block; 
        padding: 0 1rem 0 1rem;
      }
      #header-hero-text {
        font-size: 3rem;
      }`

        }</style>

      <div id="header-logo">
      <p id="header-hero-text">Widow</p>
      <p id="header-lowerC-text">bags and apparel</p>
      </div>
    </div>
  )
}
 
export default IndexPage