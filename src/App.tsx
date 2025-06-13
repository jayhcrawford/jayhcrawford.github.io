import './tailwind.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import { artist_name, heroFont, mobile_break_point, secondaryFont, tertiaryFont } from './styles';
import useWindowSize from './hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeBackground from './components/ThreeBackground';
import Footer from './Footer';
import SocialBrick from './components/SocialBrick';

const App = () => {
  const { width, height } = useWindowSize();
  const backgroundRef = useRef<HTMLDivElement>(null);

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
    <div>
      <ThreeBackground />
      <Router>
        <nav style={{ width: '100vw', zIndex: 100, fontFamily: tertiaryFont }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <li><a href="#/about">About</a></li>
            <li><a href="#/projects">Projects</a></li>
            <li><a href="#/art">Art</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </nav>
        <div id="main_container" ref={backgroundRef} style={{ position: 'relative', width: '95vw', margin: "auto", paddingTop: '80px' }}>
          <div style={{ textAlign: 'center' }}>
            <header style={{ marginBottom: '70px' }}>
              <h1 style={{ fontFamily: heroFont, fontSize: width < 500 ? "3rem" : '6rem', fontWeight: 'bold' }}>{artist_name}</h1>
              <p style={{ fontFamily: secondaryFont, fontSize: '2rem', color: '#555' }}>
                Interdisciplinary Creative & Programmer
              </p>
              <SocialBrick />
            </header>
            <main>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/art" element={<Art />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;