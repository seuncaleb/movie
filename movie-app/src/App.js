import React, {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Search from "./component/Search/Search";
import Film from "./component/Film/Film";
import FilmDetails from "./component/FilmDetails/FilmDetails";
import Series from "./component/Series/Series";
import "./App.css";

function App() {
  const [movietitle, setMovietitle] = useState([]);

  



  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Search setMovietitle={setMovietitle} movietitle={movietitle} />
            }
          />
          <Route exact path="/Series" element={<Series />} />
          <Route exact path="/Film" element={<Film movietitle={movietitle}/>} >
          <Route exact path=":filmId" element={<FilmDetails />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
