import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About'
import ProjectGallery from './pages/project-gallery/ProjectGallery.tsx';


const App = () => {
  return (
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<Homepage />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<ProjectGallery />} />
              </Route>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
