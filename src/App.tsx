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
import { linkedin } from '../linkbase';
import LocationBar from './components/LocationBar';

import SpaceBG from './components/SpaceBG';
import Projects3D from './pages/Projects3D/Projects3D';
import { projects_3d_array } from './pages/Projects3D/Projects3D_data';
import { projects_array } from './pages/Projects/Projects_data';




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
    <div id="outer_bg">
        
      <div style={{ position: 'fixed', top: 0, left: 0, width: `${width}px`, height: `${height}px`, overflow: 'hidden' }}  >
        <SpaceBG />
      </div>
      {/* <ThreeBackground /> */}
      <div id="inner_bg" ref={backgroundRef} style={{ position: 'relative', width: '95vw', margin: "auto" }}>

        <div className={`flex justify-end ${currentPath == "/" ? "mb-60" : "mb-30"}`}>
          <span className='fixed z-100'>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <button className='mt-4 border-2 bg-white p-3 rounded-lg cursor-pointer'>
                <LinkedInSVG />
              </button>
            </a>
          </span>
        </div>

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


            </Routes>
          </main>
          <Footer path={currentPath} />
        </div>

      </div>
    </div>
  );
};

export default App;




