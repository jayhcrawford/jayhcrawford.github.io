// TODO: Confirm all links on all pages
// TODO: Confirm all description text

import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import useWindowSize from './hooks/useWindowSize';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects/Projects';
import './tailwind.css';

import Footer from './components/Footer';

import HeroHeader from './components/HeroHeader';
import LinkedInSVG from './components/LinkedInSVG';
// import { linkedin } from '../linkbase';
import LocationBar from './components/LocationBar';

import { linkedin } from '../linkbase';
import SpaceBG from './components/SpaceBG';
import ThreeBackground from './components/ThreeBackground';
import Art from './pages/Art';
import Blog__TheBook from './pages/Blog__TheBook/Blog__TheBook';
import Blog__TheRipSheet from './pages/Blog__TheRipSheet/Blog__TheRipSheet';
import Blog__UrFriends from './pages/Blog__UrFriends/Blog__UrFriends';
import Blog__WidowBags from './pages/Blog__WidowBags/Blog__WidowBags';
import { art_array } from './pages/Projects/Art_data';
import { design_array } from './pages/Projects/Design_data';
import { drawing_array } from './pages/Projects/Drawing_data';
import { painting_array } from './pages/Projects/Painting_data';
import { projects_array } from './pages/Projects/Projects_data';
import Projects3D from './pages/Projects3D/Projects3D';
import { projects_3d_array } from './pages/Projects3D/Projects3D_data';




const locationData = [
  { title: "Projects", url: "projects" },
  { title: "Art", url: "art" },
  { title: "About", url: "about" },
  { title: "Contact", url: "contact" },
  { title: "3D Projects", url: "3d" },
  ...projects_array.map((item) => ({ title: item.category, url: item.url })),
  ...art_array.map((item) => ({ title: item.category, url: item.url })),
  ...painting_array.map((item) => ({ title: item.category, url: item.url })),
  ...drawing_array.map((item) => ({ title: item.category, url: item.url })),
  ...design_array.map((item) => ({ title: item.category, url: item.url })),
];


const App = () => {
  const { width, height } = useWindowSize();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;

  function splitCurrentPath() {
    return currentPath.split('/').filter((_segment, index) => index !== 0);
  }


  console.log(currentPath, "is curernt")


  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setClearColor(0x000000, 0); // Set background to transparent

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '-1'; // Set behind other content

    if (backgroundRef.current instanceof HTMLElement && !backgroundRef.current.hasChildNodes()) {
      backgroundRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (backgroundRef.current) {
        backgroundRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  console.log(width, "is the width; and the height is: ", height);



  return (
    <>



      <div id="outer_bg">

        <div style={{ position: 'fixed', top: 0, left: 0, width: `${width}px`, height: `${height}px`, overflow: 'hidden' }}  >
          <SpaceBG />
        </div>
        <ThreeBackground />

        <div className="pt-20" id="inner_bg" ref={backgroundRef} style={{ position: 'relative', width: '95vw', margin: "auto" }}>





          <div>
            {<HeroHeader width={width} path={currentPath} />}

            {splitCurrentPath().length > 1 && <LocationBar split={splitCurrentPath} locationData={locationData} />}

          </div>

          <div id="body_div">
            <main>
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects/3d" element={<Projects3D width={width} blog_array={projects_3d_array} />} />
                <Route path="/projects" element={<Projects width={width} category_array={projects_array} />} />
                <Route path="/art" element={<Art width={width} category_array={art_array} />} />
                <Route path="/art/painting" element={<Art width={width} category_array={painting_array} />} />
                <Route path="/art/drawing" element={<Art width={width} category_array={drawing_array} />} />
                <Route path="/art/design" element={<Art width={width} category_array={design_array} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects/urfriends" element={<Blog__UrFriends />} />
                <Route path="/projects/thebook" element={<Blog__TheBook />} />
                <Route path="/projects/ripsheet" element={<Blog__TheRipSheet />} />
                <Route path="/projects/widowbags" element={<Blog__WidowBags />} />




              </Routes>
            </main>
            <Footer path={currentPath} />
          </div>

        </div>

        <div className="pointer-events-none flex justify-end fixed top-0 w-full z-100 ">
          <a href={linkedin} target='new'><button className='pointer-events-auto p-2 rounded-lg m-2 bg-white cursor-pointer'>
            <LinkedInSVG />
          </button></a>
        </div>

      </div></>
  );
};

export default App;



