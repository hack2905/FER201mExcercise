import Navigation from './components/Navigation';
import './App.css';
// import Main from './components/Main';
import Footer from './components/Footer';
import Films from './components/Films';
import {
  Routes,
  Route,
} from "react-router-dom";
import Detail from './components/Detail';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Films/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;