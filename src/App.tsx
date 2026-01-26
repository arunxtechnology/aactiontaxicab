import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import FlatRates from './pages/FlatRates';
import Reservation from './pages/Reservation';
import Corporate from './pages/Corporate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-inter">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/flat-rates" element={<FlatRates />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/corporate" element={<Corporate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
