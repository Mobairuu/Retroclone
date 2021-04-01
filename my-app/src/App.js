import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.component';
import Carousel from './components/carousel/carousel'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
