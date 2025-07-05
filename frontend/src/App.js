import './App.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About';
import ProjectGallery from './pages/project-gallery/ProjectGallery.tsx';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<ProjectGallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
