import Navigation from './components/Navigation';
import './App.css';
import Footer from './components/Footer';
import Player from './components/Films';
import Detail from './components/Detail';
import News from './components/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Film from './components/Films';
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;