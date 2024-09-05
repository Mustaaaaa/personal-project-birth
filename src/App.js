import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Foto from './Components/Foto'
import Texts from './Components/Texts'
import Foto2021 from './Components/foto/Foto2021'
import Foto2022 from './Components/foto/Foto2022'
import Foto2024 from './Components/foto/Foto2024'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Foto" element={<Foto />} />
            <Route path="/Foto/2021" element={<Foto2021 />} />
            <Route path="/Foto/2022" element={<Foto2022 />} />
            <Route path="/Foto/2024" element={<Foto2024 />} />
            <Route path="/Texts" element={<Texts />} />
          </Routes>
        </Router>

    </>
  )

    ;
}

export default App;
