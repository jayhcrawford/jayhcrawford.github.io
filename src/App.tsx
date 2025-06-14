import './tailwind.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import useWindowSize from './hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeBackground from './components/ThreeBackground';
import Footer from './Footer';

import LinkedInSVG from './LinkedInSVG';
import HeroHeader from './components/HeroHeader';
import { linkedin } from '../linkbase';




const App = () => {
  const { width, height } = useWindowSize();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentPath = location.pathname;
  
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
      <ThreeBackground />
      <div id="inner_bg" ref={backgroundRef} style={{ position: 'relative', width: '95vw', margin: "auto" }}>

        <div className={`flex justify-end ${currentPath == "/" ? "mb-60" : "mb-30"}`}>
          <span className='fixed z-100'>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <button className=' border-2 bg-white p-3 rounded-lg cursor-pointer'>
                <LinkedInSVG width={width} />
              </button>
            </a>
          </span>
        </div>

        <div>
          {<HeroHeader width={width} path={currentPath} />}
        </div>

          <div id="body_div">
            <main>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
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