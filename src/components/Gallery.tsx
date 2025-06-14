import { MouseEventHandler, useState, CSSProperties } from 'react';
import './gallery.css';
import { mobile_break_point } from '../styles';

const base_url_for_images = "https://jayhcrawford-webimages.s3.us-east-2.amazonaws.com/images/painting/";

const img_names = [
  "KP.webp", "G.webp", "alien_invasion.webp", "alley.webp", "bad_painting.webp", "bada_bing.webp", "behind.webp", "blinker.webp", "blue_girl_1.webp", "blue_girl_2.webp", "bouquet.webp", "bright_lights_big_city.webp", "business_card.webp", "california_onlookers.webp", "connection.webp", "dips.webp", "eyes.webp", "following.webp", "funny_mustache_guy.webp", "hilltop_city.webp", "hollywood_hills.webp", "house.webp", "in_the_city.webp", "jacks.webp", "jacks_2.webp", "james.webp", "locked_away.webp", "network.webp", "night.webp", "one_way.webp", "online.webp", "outlooker.webp", "perspective.webp", "pictures_of_then.webp", "portrait_copy.webp", "rainy_sun.webp", "researchers.webp", "street_corner.webp", "sunday.webp", "time.webp", "tornado.webp", "transfer.webp", "victorian.webp", "what_do_you.webp", "woah_dude.webp", "worm.webp", "x.webp"
];

const webp_suffix_remove = (filename: string | undefined): string => {
  if (filename && filename.endsWith('.webp')) {
    return (
      filename.slice(0, -5)
    )
  } else {
    return "";
  }
}


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

interface LeftRight_Button__Props {
  onclick_func: MouseEventHandler<HTMLButtonElement>;
  current: number;
  direction: string;
  graphic: string;
}



const svgContainerStyle: CSSProperties = {
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const miniGalleryImageStyle: CSSProperties = {
  maxWidth: '100px',
  maxHeight: '100px',
  border: '4px solid white',
  borderRadius: '4px',
  opacity: 0.7,
  transition: 'opacity 0.2s',
  display: "inline"
};


const disabled_hue = 'rgba(0,0,0,0.2)';
const buttonDisabledStyle: CSSProperties = {
  border: `3px solid ${disabled_hue}`,
  backgroundColor: 'white',
  cursor: 'not-allowed',
};

const LeftRight_Button = (props: LeftRight_Button__Props) => {
  const isDisabled =
    (props.direction === "left" && props.current === 0) ||
    (props.direction === "right" && props.current === galleryImages.length - 1);

  const graphic_picker = () => {
    switch (props.graphic) {
      case "caret-right":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
        )
      case "caret-left":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>)
      case "arrow-right":
        return (
          <div className='h-8 w-8'>
            <svg fill={`${isDisabled ? disabled_hue : "black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        )
      case "arrow-left":
        return (
          <div className='h-8 w-8'>
            <svg  fill={`${isDisabled ? disabled_hue : "black"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
          </div>
        )
    }
  }

  return (
    <button
      style={{ ...(isDisabled ? buttonDisabledStyle : {}) }}
      className={`inline-block ${props.graphic == "caret-left" || props.graphic == "caret-right" ? "" : "border-3 border-black"} cursor-pointer p-1 h-20 w-20 bg-white rounded-[50%]`}
      onClick={props.onclick_func}
      disabled={isDisabled}
      aria-label={props.direction === "right" ? "Next painting" : "Previous painting"}
      type="button"
    >
      <div className='arrow_button_arrowContainer' style={svgContainerStyle}>
        {graphic_picker()}
      </div>
    </button>
  );
};

interface Gallery__Props {
  width: number;
}

const Gallery = (props: Gallery__Props) => {

  const [current, setCurrent] = useState<number>(0);
  const miniImages = galleryImages.slice(current + 1, current + 6);

  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

  console.log(props.width)

  if (props.width > mobile_break_point) {
    return (
      <div id="gallery-container">
        <div className="gallery_leftButton">
          <LeftRight_Button graphic="arrow-left" direction="left" current={current} onclick_func={goLeft} />
        </div>
        <div className="gallery_mainImage">

          <img
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            // style={galleryImageStyle}
            loading="lazy"
          />

        </div>

        <div className="gallery_rightButton">
          <LeftRight_Button graphic="arrow-right" direction="right" current={current} onclick_func={goRight} />
        </div>

        <div className="gallery_subImages">

          <div className="gallery_subImages" /* style={miniGalleryRowStyle} */>
            {miniImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                title={img.title}
                style={miniGalleryImageStyle}
                loading="lazy"
              />
            ))}
          </div>

        </div>

        <div className="gallery_textDetails text-left p-10"><h3>{webp_suffix_remove(galleryImages[current].title)}</h3><p>
          It's really good</p>
          <p>2020</p></div>

      </div>
    )
  } else {
    return (
      <div>

        <div id="mobile__gallery_mainImage" className='flex flex-row justify-center'>

          <style>
            {`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }`}
          </style>

          <span className='gallery_leftRightButton_cols'>
            <LeftRight_Button graphic="caret-left" direction="left" current={current} onclick_func={goLeft} />
          </span>
          <img
            style={{ width: "70%" }}
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            // style={galleryImageStyle}
            loading="lazy"
          />
          <span className='gallery_leftRightButton_cols'>
            <LeftRight_Button graphic="caret-right" direction="right" current={current} onclick_func={goRight} />

          </span>
        </div>

        <div id="mobile__gallery_textDetails" className="text-left p-10"><h3>{webp_suffix_remove(galleryImages[current].title)}</h3><p>
          It's really good</p>
          <p>2020</p></div>

        <div id="mobile__gallery_subImages" /* style={miniGalleryRowStyle} */>
          {miniImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              title={img.title}
              style={miniGalleryImageStyle}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Gallery;



// const Gallery: React.FC = () => {
// const [current, setCurrent] = useState<number>(0);
// const miniImages = galleryImages.slice(current + 1, current + 6);


// const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
// const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

//   return (
//     <div id="gallery-container">
//       <div className="gallery_main-image" /* style={mainImageRowStyle} */>
//         <div className='gallery_leftButton'>
//           <LeftRight_Button direction="left" current={current} onclick_func={goLeft} />
//         </div>
//         <img
//           src={galleryImages[current].src}
//           alt={galleryImages[current].alt}
//           title={galleryImages[current].title}
//           // style={galleryImageStyle}
//           loading="lazy"
//         />
//         <div className="gallery_rightButton"><LeftRight_Button direction="right" current={current} onclick_func={goRight} />
//         </div>
//       </div>
//       {/* <div>hello</div> */}
//       <div className="gallery_textDetails">Hello</div>
//       <div className="gallery_subImages" /* style={miniGalleryRowStyle} */>
//         {miniImages.map((img) => (
//           <img
//             key={img.src}
//             src={img.src}
//             alt={img.alt}
//             title={img.title}
//             // style={miniGalleryImageStyle}
//             loading="lazy"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };





// const mainImageRowStyle: CSSProperties = {
//   display: 'flex',
//   alignItems: 'center',
//   gridArea: ""
// };

// const galleryImageStyle: CSSProperties = {
//   maxWidth: '400px',
//   maxHeight: '400px',
//   border: '2px solid purple',
//   borderRadius: '8px',
//   display: 'inline',
// };

// const miniGalleryRowStyle: CSSProperties = {
//   display: 'flex',
//   gap: '0.5rem',
//   marginTop: '1rem',
// };