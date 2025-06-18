import './tailwind.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import useWindowSize from './hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import Footer from './components/Footer';

import LinkedInSVG from './components/LinkedInSVG';
import HeroHeader from './components/HeroHeader';
// import { linkedin } from '../linkbase';
import LocationBar from './components/LocationBar';

import SpaceBG from './components/SpaceBG';
import Projects3D from './pages/Projects3D/Projects3D';
import { projects_3d_array } from './pages/Projects3D/Projects3D_data';
import { projects_array } from './pages/Projects/Projects_data';
import { linkedin } from '../linkbase';
import ThreeBackground from './components/ThreeBackground';
import Blog__UrFriends from './pages/Blog__UrFriends/Blog__UrFriends';
import Blog__TheBook from './pages/Blog__TheBook/Blog__TheBook';
import Blog__WidowBags from './pages/Blog__WidowBags/Blog__WidowBags';
import Blog__TheRipSheet from './pages/Blog__TheRipSheet/Blog__TheRipSheet';




const locationTest = [
  {
    title: "Projects",
    url: "/projects"
  },
  {
    title: "3D Projects",
    url: "hi"
  },
]


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

            {splitCurrentPath().length > 1 && <LocationBar split={splitCurrentPath} locationData={locationTest} />}

          </div>

          <div id="body_div">
            <main>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects/3d" element={<Projects3D width={width} blog_array={projects_3d_array} />} />
                <Route path="/projects" element={<Projects width={width} category_array={projects_array} />} />
                <Route path="/art" element={<Art width={width} />} />
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




