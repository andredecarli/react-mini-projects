import { useState } from 'react'
import MyCarousel from './components/MyCarousel/MyCarousel'
import FAQ from './components/FAQ/FAQ';
import QuoteGenerator from './components/QuoteGenerator/QuoteGenerator';
import ShoppingList from './components/ShoppingList/ShoppingList';

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
      case "shopping":
        return <ShoppingList />
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
            <li onClick={() => changePage("shopping")}>Shopping List</li>
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
