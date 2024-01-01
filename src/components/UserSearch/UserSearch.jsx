import { useState } from "react";
import axios from "axios";
import "./UserSearch.css"

const API_URL = "https://api.github.com";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function submit(event) {
    event.preventDefault();
    axios.get(`${API_URL}/search/users?q=${query}`)
      .then((response) => {
        setResults(response.data.items);
        console.log(response.data.items);
      })
  }

  function onSearchChange(event) {
    setQuery(event.target.value);
  }


  return (
    <>
      <h2>Mini Project 5: Github User Search</h2>
      <div className="github-search">
        <form onSubmit={submit}>
          <input 
            id="search" 
            type="text" 
            name="user" 
            required 
            placeholder="Enter username or email" 
            value={query}
            onChange={onSearchChange}
          />
          <button>Search</button>
        </form>
        <h3>Results</h3>
        <div className="results">
          {results.map((result) => <User avatar={result.avatar_url} url={result.html_url} username={result.login} key={result.id} />)}
        </div>
      </div>
    </>
    )
}

function User({avatar, url, username}) {
  return (
    <div className="user">
      <img src={avatar} alt="avatar" width="50" height="50" />
      <p>
        <a href={url} target="_blank">
          {username}
        </a>
      </p>
    </div>
  )
}