import { useEffect, useState } from "react"
import axios from "axios";
import "./QuoteGenerator.css"

export default function QuoteGenerator() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("https://type.fit/api/quotes")
      .then((response) => {
        setQuotes(response.data);
        setQuote(response.data[0]);
      })
  }, []);

  function randomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getNewQuote() {
    setQuote(randomQuote());
  }


  return (
    <>
      <h2>Mini Project 3: Quote Generator</h2>
      <div className="quote">
        <button onClick={getNewQuote}>Random Quote</button>
        <p>{quote?.text}</p>
        <p>{quote?.author}</p>
      </div>
    </>
    )
}