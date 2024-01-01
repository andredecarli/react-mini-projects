import { useState } from 'react'
import MyCarousel from './components/MyCarousel/MyCarousel'
import FAQ from './components/FAQ/FAQ';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';

function App() {
  const [page, setPage] = useState(null);

  function changePage(page) {
    setPage(page);
  }

  function displayPage(page) {
    switch (page) {
      case "carousel":
        return <MyCarousel />
      case "faq":
        return <FAQ />
      case "quote":
        return <QuoteGenerator />
      default:
        return <p>Choose a Mini Project</p>
    }
  }
 
  return (
    <>
      <header>
        <h1>Mini React Projects</h1>
        <nav>
          <ul>
            <li onClick={() => changePage("carousel")}>Image Carousel</li>
            <li onClick={() => changePage("faq")}>FAQ</li>
            <li onClick={() => changePage("quote")}>Quote Generator</li>
          </ul>
        </nav>
      </header>
      <main>
        {displayPage(page)}
      </main>
    </>
  )
}

export default App
