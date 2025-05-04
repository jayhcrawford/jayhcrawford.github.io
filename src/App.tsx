import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import { heroFont, mobile_break_point, secondaryFont, tertiaryFont } from './styles';
import useWindowSize from './hooks/useWindowSize';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeBackground from './components/ThreeBackground';

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
    <>
      <ThreeBackground />
      <Router>
        <div ref={backgroundRef} style={{ position: 'relative', width: '95vw', height: '100vh',  }}>
          <div style={{ textAlign: 'center' }}>
            <header style={{ marginBottom: '70px' }}>
              <h1 style={{ fontFamily: heroFont, fontSize: '6rem', fontWeight: 'bold' }}>Jay Crawford</h1>
              <div style={{
                marginTop: "2em",
                marginBottom: "2em",
                fontFamily: "Cal Sans",
                color: "white",
                backgroundColor: "red",
                marginLeft: "-8px",
                width: "100vw",
                transform: "rotate(-2deg)",
                transformOrigin: "center"
              }}>
                <style>
                  {`
            .under_construct_text {
              padding-left: 2em;
              padding-right: 2em;
              white-space: nowrap;
            }
            `}
                </style>
                {width > mobile_break_point &&
                  <>
                    <span className="under_construct_text">Under Construction</span>
                    <span className="under_construct_text">Under Construction</span>
                    <span className="under_construct_text">Under Construction</span>
                  </>}
                {width <= mobile_break_point &&
                  <>
                    <span className="under_construct_text">Under Construction</span>
                    <span className="under_construct_text">Under Construction</span>
                  </>}
              </div>            <p style={{ fontFamily: secondaryFont, fontSize: '2rem', color: '#555' }}>
                Interdisciplinary Creative & Programmer

              </p>
            </header>
            <nav style={{ marginBottom: '50px', fontFamily: tertiaryFont }}>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <li><a href="#/about" style={{ textDecoration: 'none', color: '#007BFF' }}>About</a></li>
                <li><a href="#/projects" style={{ textDecoration: 'none', color: '#007BFF' }}>Projects</a></li>
                <li><a href="#/art" style={{ textDecoration: 'none', color: '#007BFF' }}>Art</a></li>
                <li><a href="#/writing" style={{ textDecoration: 'none', color: '#007BFF' }}>Writing</a></li>
                <li><a href="#/contact" style={{ textDecoration: 'none', color: '#007BFF' }}>Contact</a></li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/art" element={<Art />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;