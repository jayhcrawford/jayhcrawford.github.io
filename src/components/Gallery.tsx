import React, { useState } from 'react';
import './gallery.css';




const base_url_for_images = "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/"

const img_names = [
  "G.webp",

  "KP.webp",

  "alien_invasion.webp",

  "alley.webp",

  "bad_painting.webp",

  "bada_bing.webp",

  "behind.webp",

  "blinker.webp",

  "blue_girl_1.webp",

  "blue_girl_2.webp",

  "bouquet.webp",

  "bright_lights_big_city.webp",

  "business_card.webp",

  "california_onlookers.webp",

  "connection.webp",

  "dips.webp",

  "eyes.webp",

  "following.webp",

  "funny_mustache_guy.webp",

  "hilltop_city.webp",

  "hollywood_hills.webp",

  "house.webp",

  "in_the_city.webp",

  "jacks.webp",

  "jacks_2.webp",

  "james.webp",

  "locked_away.webp",

  "network.webp",

  "night.webp",

  "one_way.webp",

  "online.webp",

  "outlooker.webp",

  "perspective.webp",

  "pictures_of_then.webp",

  "portrait_copy.webp",

  "rainy_sun.webp",

  "researchers.webp",

  "street_corner.webp",

  "sunday.webp",

  "time.webp",

  "tornado.webp",

  "transfer.webp",

  "victorian.webp",

  "what_do_you.webp",

  "woah_dude.webp",

  "worm.webp",

  "x.web"

]

type GalleryImage = {
  src: string;
  alt?: string;
  title?: string;
};

type GalleryImages = GalleryImage[];

const galleryImages: GalleryImages = img_names.map(name => ({
  src: `${base_url_for_images}${name}`,
  alt: name,
  title: name,
}));

// const Gallery = () => {
//   const [current, setCurrent] = useState(0);

//   const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
//   const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

//   return (
//     <>
//       <div id="gallery-container">
//         <style>
//           {`
//           .cycle_img_bttn {
//             background-color: red;
//           }
//           `}
//         </style>
//         <button className={"cycle_img_bttn"} onClick={goLeft} disabled={current === 0}>&lt;</button>
//         <img
//           src={galleryImages[current].src}
//           alt={galleryImages[current].alt}
//           title={galleryImages[current].title}
//           className="gallery-image"
//         />
//         <button className={"cycle_img_bttn"} onClick={goRight} disabled={current === galleryImages.length - 1}>&gt;</button>

//       </div>
//       <div>
//         Here is where the mini images will be</div></>
//   );
// };



// const Gallery = () => {
//   const [current, setCurrent] = useState(0);

//   const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
//   const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

//   // Get the next 4 images after the current one
//   const miniImages = galleryImages.slice(current + 1, current + 5);

//   return (
//     <>
//       <div id="gallery-container">
// <div>
//   <style>
//     {
//       `
//       .cycle_img_bttn {
//         background-color: blue;
//         display: inline;
//       }
//       `
//     }
//   </style>
//   <button className="cycle_img_bttn" onClick={goLeft} disabled={current === 0}>&lt;</button>
//   <img
//     src={galleryImages[current].src}
//     alt={galleryImages[current].alt}
//     title={galleryImages[current].title}
//     className="gallery-image"
//     style={{ display: "inline" }}
//   />
//   <button className="cycle_img_bttn" onClick={goRight} disabled={current === galleryImages.length - 1}>&gt;</button>

// </div>

//       </div>
//       <div className="mini-gallery-container" style={{
//         display: "flex",
//         justifyContent: "center"
//       }}>
//         <div className="mini-gallery-row">
//           {miniImages.map((img, idx) => (
//             <img
//               key={idx}
//               src={img.src}
//               alt={img.alt}
//               title={img.title}
//               className="mini-gallery-image"
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };



const Gallery: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

  const miniImages = galleryImages.slice(current + 1, current + 5);

  return (
    <div id="gallery-container" >
      <div className="gallery_main-image" style={{ display: "flex", alignItems: "center"}}>
        <style>
          {
            `
               .cycle_img_bttn {
                 background-color: blue;
                 display: inline-block;
               }
               `
          }
        </style>
        <button
          className="cycle_img_bttn"
          onClick={goLeft}
          disabled={current === 0}
          aria-label="Previous painting"
          type="button"
        >
          &lt;
        </button>
        <img
          src={galleryImages[current].src}
          alt={galleryImages[current].alt}
          title={galleryImages[current].title}
          className="gallery-image"
          style={{ display: "inline" }}
          loading="lazy"
        />
        <button
          className="cycle_img_bttn"
          onClick={goRight}
          disabled={current === galleryImages.length - 1}
          aria-label="Next painting"
          type="button"
        >
          &gt;
        </button>
      </div>
      <div className="mini-gallery-row">
        {miniImages.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            title={img.title}
            className="mini-gallery-image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

