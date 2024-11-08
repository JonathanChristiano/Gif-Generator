import './App.css';
import Footer from './Footer';
import Header from './Header';
import Random from './Random';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-div'>
        <Random/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;