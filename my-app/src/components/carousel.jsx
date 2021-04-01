import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

let arr = [
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BYjY1Y2ZmNDctZWQ3Yy00MTE3LTk2M2QtMjQ0MDA5ODVjMDEyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg",
        "title" : "Neon Genesis Evangelion"
    },
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg", 
        "title" : "Demon Slayer"
    },
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BOWNhMDMyMDYtNzJlOS00YzhhLWFiMjktYWY1MzMzZGZhOGRjXkEyXkFqcGdeQXVyNDYzNTI2ODc@._V1_UY1200_CR85,0,630,1200_AL_.jpg", 
        "title" : "Samurai Champloo"
    }, 
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_UY1200_CR85,0,630,1200_AL_.jpg", 
        "title" : "Cowboy Bebop"
    }, 
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BY2I2MzU0ZmUtNWE5Mi00OWM3LWIyZDEtZTg0Y2U2N2FlZDUyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", 
          "title" : "Afro Samurai"
    },
    {
        "img" : "https://static.wikia.nocookie.net/dubbing9585/images/e/ed/Blood%2B.jpg/revision/latest/top-crop/width/360/height/450?cb=20190330080424", 
        "title" : "Blood+"
    }, 
    {
        "img" : "https://i1.sndcdn.com/artworks-000107543096-k89r56-t500x500.jpg", 
        "title" : "Caillou Grownup"
    }, 
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR109,0,630,1200_AL_.jpg", 
        "title" : "Tokyo Ghoul"
    }, 
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", 
        "title" : "My Hero Academia"
    }, 
    {
        "img" : "https://m.media-amazon.com/images/M/MV5BOWUxNzIzNzgtYzhiMC00ZTlmLWIxYjctMjhhNDFhOGJmNjRmL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg", 
        "title" : "Ergo Proxy"
    },
    {
        "img" : "https://static.tvtropes.org/pmwiki/pub/images/image_0250.jpeg", 
        "title" : "Code Geass"
    }
];

const styles = {
    img: {
        float: 'left',
        width:  '100px',
        height: '250px',
    }
}

const Carousel = () => {
    const renderSlides = () => 
        arr.map(el => (
            <div>
                <img src={el.img} style={styles.img}/>
                <h4>{el.title}</h4>
            </div>
        ));
    
    
    return (
        <div>
            <h3>Anime</h3>
            <Slider 
                dots={false}
                slidesToShow={4}
                slidesToScroll={1}
            >
                {renderSlides()}
            </Slider>
        </div>
    );
}; 

export default Carousel;