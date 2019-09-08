import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = "06678112"
  const APP_KEY = "f3eb988da60219a026750222a81f6148"
  const API_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar"></input>
        <button className="search-button">search</button>
      </form>
    </div>
  )
}

export default App;
