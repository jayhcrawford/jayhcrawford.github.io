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
  "x.webp"

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

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const goLeft = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goRight = () => setCurrent((prev) => Math.min(prev + 1, galleryImages.length - 1));

  const miniImages = galleryImages.slice(current + 1, current + 5);

  return (
    <div id="gallery-container" >
      <div className="gallery_main-image" style={{ display: "flex", alignItems: "center" }}>
        <style>
          {
            `
               .cycle_img_bttn {
                 display: inline-block;
                 border: 3px solid black;
                 background-color: white
                 padding: 1rem;
                 border-radius: 50%;
                 height: 4rem;
                 width:  4rem;

               }

               .cycle_img_bttn:disabled,
               .cycle_img_bttn[disabled]{
                  border: 3px solid rgba(0,0,0,0.2);
                  background-color: white;
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>        </button>
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

