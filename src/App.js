import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <RecoilRoot>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/New" element={<New />} />
          <Route path="/Kids" element={<Kids />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Modal' element={<Modal />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
