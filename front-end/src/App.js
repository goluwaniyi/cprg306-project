import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './homeLayout/Home';
import Footer from './components/Footer';
import ContinentPage from './pages/ContinentPage';
import TripDetailPage from './pages/TripDetailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/continents/:continentId" element={<ContinentPage/>}/>
          <Route path="/continents/:continentId/trips/:tripId" element={<TripDetailPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
