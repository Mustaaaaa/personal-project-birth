import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Foto from './Components/Foto'
import Texts from './Components/Texts'
import { ScrollProvider } from './Components/Assets/ScrollDisable';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ScrollProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Foto" element={<Foto />} />
            <Route path="/Texts" element={<Texts />} />
          </Routes>
        </Router>
      </ScrollProvider>

    </>
  )

    ;
}

export default App;
