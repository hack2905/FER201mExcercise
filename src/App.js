// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      {/* <Main/> */}
      
      <Players/>
      <Footer/>
    </div>
  );
}

export default App;