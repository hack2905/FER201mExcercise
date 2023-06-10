import Navigation from './components/Navigation';
import './App.css';
// import Main from './components/Main';
import Footer from './components/Footer';
import Films from './components/Films';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      {/* <Main/> */}
      <Films/>
      <Footer/>
    </div>
  );
}

export default App;