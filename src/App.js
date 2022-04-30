import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
