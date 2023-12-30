import { useState } from 'react'

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [current, setCurrent] = useState(0);

  function nextImage() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function previousImage() {
    setCurrent(current === 0 ? images.length - 1: current - 1);
  }

  return (
    <div>
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={previousImage}>⬅</div>
        <div className='right-arrow' onClick={nextImage}>⮕</div>
        {images.map((image, index) => 
          current === index && (
            <div key={image} className="slide">
              <img src={image} alt="images" />
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App
