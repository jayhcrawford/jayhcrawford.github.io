import { MouseEventHandler, useState, CSSProperties, Dispatch, SetStateAction } from 'react';
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

interface MiniGallery__Props {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  images_array: string[];
}

const MiniGallery = (props: MiniGallery__Props) => {
  const miniImages = () => {
    if (props.current >= galleryImages.length - 5) {
       return galleryImages.slice(galleryImages.length - 5, galleryImages.length)
    } else {
       return galleryImages.slice(props.current + 1, props.current + 6);
    }

  };

  return (
    <div className="gallery_subImages">
      {miniImages().map((img) => (
        <button className="mini_gallery_image" onClick={()=> props.setCurrent(props.images_array.indexOf(img.title ? img.title : ""))}>
          <style>
            {`
              .mini_gallery_image:hover {
                outline: 2px solid rgba(255, 255, 255, 1);
                transition: outline .2s;
                opacity: 100%;

              .mini_gallery_image {
                opacity: 80%;
              }
              }
            `}
          </style>
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            title={img.title}
            className="inline max-w-25 max-h-25 m-1 rounded-sm"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  )
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
  onclick_func?: MouseEventHandler<HTMLButtonElement>;
  current: number;
  direction: string;
  graphic: string;
}

const disabled_hue = 'rgba(255,255,255,0.2)';
const buttonDisabledStyle: CSSProperties = {
  border: `3px solid ${disabled_hue}`,
  cursor: 'not-allowed',
};

const LeftRight_Button = (props: LeftRight_Button__Props) => {
  const isDisabled =
    (props.direction === "left" && props.current === 0) ||
    (props.direction === "right" && props.current === galleryImages.length - 1);

  console.log(props.current, props.direction)

  const graphic_picker = () => {
    switch (props.graphic) {
      case "caret-right":
        return (
          < div className='h-10 w-10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>

          </ div>
        )
      case "caret-left":
        return (
          < div className='h-10 w-10'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>

          </ div>
        )
      case "arrow-right":
        return (
          <div className=' h-8 w-8'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
          </div>
        )
      case "arrow-left":
        return (
          <div className=' h-8 w-8'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
          </div>
        )
    }
  }

  return (
    <button
      style={{ ...(((props.graphic == "arrow-left" || props.graphic == "arrow-right") && isDisabled) ? buttonDisabledStyle : {}) }}
      className={`inline-block ${(props.graphic == "caret-left" || props.graphic == "caret-right") ? "LR_bttn" : "border-3 border-white LR_bttn"} cursor-pointer p-1 h-20 w-20 bg-none rounded-[50%]`}
      onClick={props.onclick_func}
      disabled={isDisabled}
      aria-label={props.direction === "right" ? "Next painting" : "Previous painting"}
      type="button"
    >
      <style>
      {`
        .LR_bttn:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, .5)) drop-shadow(0 0 10px rgba(255, 255, 255, .5));
        }
        .LR_bttn:active {
          filter: none;
        }
        .LR_bttn {
          transition: filter .2s;
        }
      `}
      </style>

      <div style={{ fill: isDisabled ? disabled_hue : "white" }} className='flex justify-center items-center' >
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

  console.log(current, "is current")
  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

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
            loading="lazy"
          />
        </div>

        <div className="gallery_rightButton">
          <LeftRight_Button graphic="arrow-right" direction="right" current={current} onclick_func={goRight} />
        </div>

        <MiniGallery images_array={img_names} current={current} setCurrent={setCurrent} />

        <div className="gallery_textDetails text-white text-left p-10"><h3>{webp_suffix_remove(galleryImages[current].title)}</h3><p>
          acrylic on canvas</p>
          <p>2021-2025</p></div>

      </div>
    )
  } else {
    return (
      <div>
        <div id="" className='flex flex-row justify-center'>

          <style>
            {`
            .gallery_leftRightButton_cols {
              display: flex;
              align-items: center;
            }
            `}
          </style>

          <button onClick={() => goLeft()} className='gallery_leftRightButton_cols'>
            <LeftRight_Button graphic="caret-left" direction="left" current={current} />
          </button>

          <img
            style={{ width: "70%" }}
            src={galleryImages[current].src}
            alt={galleryImages[current].alt}
            title={galleryImages[current].title}
            loading="lazy"
          />
          <button onClick={() => goRight()} className='gallery_leftRightButton_cols'>
            <LeftRight_Button graphic="caret-right" direction="right" current={current} />
          </button>
        </div>

        <div className="text-left p-10"><h3>{webp_suffix_remove(galleryImages[current].title)}</h3><p>
          acrylic on canvas</p>
          <p>2021-2025</p></div>

        <MiniGallery images_array={img_names} setCurrent={setCurrent} current={current} />
      </div>
    )
  }
}

export default Gallery;