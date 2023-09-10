import React, { useState } from "react";
import Products from "./products";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Desktop = () => {
  const [sear, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = 'aa8ad2e6';
  const YOUR_APP_KEY = '359691652eff335099b491c50dc76589';

  const SubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${sear}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then(response => response.json())
      .then(data => setData(data.hits))
  }

  return (
    <div className="centered-container">
      <center>
        <h1><i>Food And Recipe Search</i><br></br>
        <span><h4>-Sudharshan Baskar</h4></span></h1>
        <img src={require('./pizza-1.png')} alt="Pizza" />
        <form onSubmit={SubmitHandler}>
          <div className="search-bar">
            <input className="tex" type="text" value={sear} onChange={(e) => setSearch(e.target.value)} />
            <input id="sub" type="submit" className="btn btn-primary" value="Search" />
          </div><br></br><br></br><br></br>
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default Desktop;
