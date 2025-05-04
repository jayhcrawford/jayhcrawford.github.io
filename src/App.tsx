import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Writing from './pages/Writing';
import Contact from './pages/Contact';
import { heroFont, mobile_break_point, secondaryFont, tertiaryFont } from './styles';
import useWindowSize from './hooks/useWindowSize';

const App = () => {
  const { width, height } = useWindowSize();

  console.log(width, "is the width; and the height is: ", height);

  return (
    <Router>
      <div>

        <div style={{ textAlign: 'center', }}>
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
            </div>
            <p style={{ fontFamily: secondaryFont, fontSize: '2rem', color: '#555' }}>Interdisciplinary Creative & Programmer</p>
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
  );
};

export default App;