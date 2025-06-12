import React from 'react';
import './gallery.css';

const galleryImages = [
  {
    src: 'images/painting1.jpg',
    alt: 'Painting 1',
    title: 'Sunset Over the Ocean'
  },
  {
    src: 'images/painting2.jpg',
    alt: 'Painting 2',
    title: 'Mountain Landscape'
  },
  {
    src: 'images/painting3.jpg',
    alt: 'Painting 3',
    title: 'Abstract Colors'
  },
  // Add more paintings as needed
];

const Gallery = () => (
  <div id="gallery-container">
    {galleryImages.map((image, idx) => (
      <img
        key={idx}
        src={image.src}
        alt={image.alt}
        title={image.title}
        className="gallery-image"
      />
    ))}
  </div>
);

export default Gallery;