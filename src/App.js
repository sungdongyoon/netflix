import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './Components/Navigation';
import { ClipLoader } from 'react-spinners';

function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
