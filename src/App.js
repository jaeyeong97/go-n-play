import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import moviesData from './data/MoviesData.json';
import Header from './components/Header';
import ScrollToTop from './util/ScrollTop';
import Home from './pages/Home';
import Series from './pages/Series';
import Movie from './pages/Movie';
import New from './pages/New';
import Kids from './pages/Kids';
import Search from './pages/Search';
import Modal from './pages/Modal';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home moviesData={moviesData} />} />
        <Route path="/Series" element={<Series moviesData={moviesData} />} />
        <Route path="/Movie" element={<Movie moviesData={moviesData} />} />
        <Route path="/New" element={<New moviesData={moviesData} />} />
        <Route path="/Kids" element={<Kids moviesData={moviesData} />} />
        <Route path='/Search' element={<Search moviesData={moviesData} />} />
        <Route path='/Modal' element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
