import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.component';
import Carousel from './components/carousel/carousel'
import AnimeContainer from './components/anime-container/anime-container.component'

function App() {
  return (
    <div className="App">
      <Header/>
      <AnimeContainer></AnimeContainer>
      <Carousel category="FEATURED ANIME"></Carousel>
      <Carousel category="COMEDY"></Carousel>
      <Carousel category="SHONEN"></Carousel>
      <Carousel category="ROMANCE"></Carousel>
      
    </div>
  );
}

export default App;
