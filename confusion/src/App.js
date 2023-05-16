// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
// import Players from './components/Players';
import Footer from './Footer';
import Main from './components/Main';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      {/* <Players/> */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;