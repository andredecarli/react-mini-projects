import { useState } from 'react';
import './MyCarousel.css';

const images = [
  "/assets/image1.jpeg",
  "/assets/image2.jpeg",
  "/assets/image3.jpeg",
  "/assets/image4.jpeg",
  "/assets/image5.jpeg",
]

export default function MyCarousel() {
  const [imagemAtual, setImagemAtual] = useState(0);

  function proximaImagem() {
    setImagemAtual(imagemAtual === images.length - 1 ? 0 : imagemAtual + 1);
  }

  function imagemAnterior() {
    setImagemAtual(imagemAtual === 0 ? images.length - 1 : imagemAtual - 1);
  }

  return (
    <div>
      <h2>Mini Project 1: Image Carousel</h2>
      <div className="carousel">
        <button onClick={imagemAnterior}>&lt;</button>
        <div className="slide">
          <img src={images[imagemAtual]} alt='images' />
        </div>
        <button onClick={proximaImagem}>&gt;</button>
      </div>
    </div>
  )
}